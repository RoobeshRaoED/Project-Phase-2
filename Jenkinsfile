pipeline {
    agent any

    parameters {
        booleanParam(
            name: 'SKIP_BACKEND_TESTS',
            defaultValue: false,
            description: 'Skip Maven tests (use when the PostgreSQL server is unreachable from the Jenkins agent)'
        )
    }

    environment {
        // If your Git repo root is the "HLMS" folder itself, leave ROOT_DIR as "."
        // If the repo contains an "HLMS" folder at the top level, set ROOT_DIR = "HLMS"
        ROOT_DIR     = "."

        BACKEND_DIR  = "${ROOT_DIR}/Backend"
        FRONTEND_DIR = "${ROOT_DIR}/Frontend"

        FRONTEND_PORT = "4200"
        EUREKA_PORT   = "8761"
        GATEWAY_PORT  = "8080"
    }

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Frontend - Install Dependencies') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm ci || npm install'
                }
            }
        }

        stage('Frontend - Build') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm run build'
                }
            }
        }

        /*
         * NOTE: there is no "test" target in angular.json and no karma/jasmine
         * dependencies in package.json, so `npm test` would fail this build.
         * Once you add karma + jasmine and a test target, uncomment this stage.
         *
        stage('Frontend - Test') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm test -- --watch=false --browsers=ChromeHeadless'
                }
            }
        }
        */

        stage('Backend - Build and Test') {
            steps {
                dir("${BACKEND_DIR}") {
                    script {
                        if (params.SKIP_BACKEND_TESTS) {
                            bat 'mvn clean package -DskipTests'
                        } else {
                            bat 'mvn clean package'
                        }
                    }
                }
            }
            post {
                always {
                    junit allowEmptyResults: true,
                          testResults: "${BACKEND_DIR}/*/target/surefire-reports/*.xml"
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: "${BACKEND_DIR}/*/target/*.jar", fingerprint: true, allowEmptyArchive: true
                archiveArtifacts artifacts: "${FRONTEND_DIR}/dist/**", fingerprint: true, allowEmptyArchive: true
            }
        }

        stage('Stop Existing Applications') {
            steps {
                bat '''
                for %%P in (4200 8080 8081 8082 8083 8084 8085 8086 8761) do (
                    echo Stopping application on port %%P...
                    powershell -Command "Get-NetTCPConnection -LocalPort %%P -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"
                )
                exit /b 0
                '''
            }
        }

        stage('Start Eureka Server') {
            steps {
                startService('eureka-server', '8761')
                waitForPort('8761', '90')
            }
        }

        stage('Start Microservices') {
            steps {
                startService('user-service',         '8081')
                startService('loan-service',         '8082')
                startService('notification-service', '8083')
                startService('legal-service',        '8084')
                startService('repayment-service',    '8085')
                startService('document-service',     '8086')

                waitForPort('8081', '120')
                waitForPort('8082', '120')
                waitForPort('8083', '120')
                waitForPort('8084', '120')
                waitForPort('8085', '120')
                waitForPort('8086', '120')
            }
        }

        stage('Start API Gateway') {
            steps {
                startService('api-gateway', '8080')
                waitForPort('8080', '120')
            }
        }

        stage('Start Frontend Application') {
            steps {
                bat """
                echo Starting Angular frontend...
                set JENKINS_NODE_COOKIE=dontKillMe
                powershell -Command "Start-Process -FilePath 'cmd.exe' -ArgumentList '/c npx ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port ${FRONTEND_PORT}' -WorkingDirectory '%WORKSPACE%\\${FRONTEND_DIR}' -WindowStyle Hidden"
                """
                waitForPort("${FRONTEND_PORT}", '120')
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo 'Build and deployment completed successfully.'
            echo 'Frontend    : http://localhost:4200'
            echo 'API Gateway : http://localhost:8080'
            echo 'Eureka      : http://localhost:8761'
            echo '======================================'
        }
        failure {
            echo '======================================'
            echo 'Pipeline failed. Check Jenkins console logs.'
            echo '======================================'
        }
    }
}

/**
 * Starts one Spring Boot service from its target/*.jar, detached from Jenkins.
 */
void startService(String serviceName, String port) {
    bat """
    echo Starting ${serviceName} on port ${port}...
    set JENKINS_NODE_COOKIE=dontKillMe
    powershell -Command "\$jar = Get-ChildItem '%WORKSPACE%\\${env.BACKEND_DIR}\\${serviceName}\\target\\*.jar' | Where-Object { \$_.Name -notlike '*sources*' -and \$_.Name -notlike '*javadoc*' } | Select-Object -First 1; if (-not \$jar) { Write-Error 'No jar found for ${serviceName}'; exit 1 }; Start-Process -FilePath 'java' -ArgumentList '-jar', \$jar.FullName -WindowStyle Hidden"
    """
}

/**
 * Blocks until something is listening on the given port, or fails after timeoutSeconds.
 */
void waitForPort(String port, String timeoutSeconds) {
    bat """
    powershell -Command "\$deadline = (Get-Date).AddSeconds(${timeoutSeconds}); while ((Get-Date) -lt \$deadline) { if (Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue) { Write-Host 'Port ${port} is up.'; exit 0 }; Start-Sleep -Seconds 3 }; Write-Error 'Timed out waiting for port ${port}'; exit 1"
    """
}
