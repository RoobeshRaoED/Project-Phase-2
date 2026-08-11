-- =====================================================================
-- HLMS — Bidder Portal demo seed data  (PostgreSQL)
--
-- Seeds the minimum coherent dataset the Bidder Portal needs to show
-- every state: open + closed listings, a listing you lead, a listing
-- where you were outbid, and a listing with no bids yet.
--
--   4  app_user          (1 demo bidder + 2 rival bidders + 1 borrower)
--   5  loan_application  (the properties)
--   5  auction_case      (all at stage 'Auction Scheduled')
--  10  bid
--
-- Demo login:  mohan.prasath@hlms.example.com  /  Bidder@123   (Mohan Prasath)
--
-- Idempotent: every INSERT uses ON CONFLICT DO NOTHING, so it is safe to
-- re-run. See the notes at the bottom before running.
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- 1. Users  (4 rows)
--
-- password_hash is a real BCrypt hash of 'Bidder@123', cost 10, $2a$
-- prefix — generated and verified, not a placeholder. All four accounts
-- share it for demo convenience.
--
-- The borrower is required because loan_application.user_email is NOT
-- NULL and references app_user(email).
-- ---------------------------------------------------------------------
INSERT INTO app_user
    (email, name, mobile, password_hash, role, active,
     id_type, id_number, pref_sms, pref_email, pref_inapp, created_at)
VALUES
    ('mohan.prasath@hlms.example.com',     'Mohan Prasath',            '9888822222',
     '$2a$10$8jm/xJnAwHzbP5s2M4Ihyu.lpgc1EYxq/oz/keRqQdPOPczh8nZ7S',
     'BIDDER',   TRUE, 'PAN', 'MOHPR1234A', TRUE, TRUE, TRUE, NOW()),

    ('mohan@hlms.example.com',             'Mohan',                    '9888833333',
     '$2a$10$8jm/xJnAwHzbP5s2M4Ihyu.lpgc1EYxq/oz/keRqQdPOPczh8nZ7S',
     'BIDDER',   TRUE, 'PAN', 'MOHAN5678B', TRUE, TRUE, TRUE, NOW()),

    ('prasath@hlms.example.com',           'Prasath',                  '9888844444',
     '$2a$10$8jm/xJnAwHzbP5s2M4Ihyu.lpgc1EYxq/oz/keRqQdPOPczh8nZ7S',
     'BIDDER',   TRUE, 'PAN', 'PRASA9012C', TRUE, TRUE, TRUE, NOW()),

    ('prasath.mohan@hlms.example.com',     'Prasath Mohan',            '9888855555',
     '$2a$10$8jm/xJnAwHzbP5s2M4Ihyu.lpgc1EYxq/oz/keRqQdPOPczh8nZ7S',
     'CUSTOMER', TRUE, 'PAN', 'PRAMO3456D', TRUE, TRUE, TRUE, NOW())
ON CONFLICT (email) DO NOTHING;


-- ---------------------------------------------------------------------
-- 2. Loan applications  (5 rows) — the properties under auction
--
-- These supply the address / type / declared value the listing screens
-- show. status 'NPA' + a late stage_index reflects an account that has
-- gone through recovery, which is how a property reaches auction.
--
-- form_data is jsonb NOT NULL; saved_at / created_at are NOT NULL.
-- product_id is left NULL to avoid depending on a seeded loan_product.
-- ---------------------------------------------------------------------
INSERT INTO loan_application
    (app_id, tracking_no, user_email, product_id, loan_amount, tenure_years,
     purpose, interest_rate, status, stage_index, current_step, form_data,
     saved_at, created_at, applicant_name, applicant_mobile, applicant_pan,
     addr_city, addr_state, addr_pincode,
     property_address, property_type, property_value)
VALUES
    ('APP-9001', 'HLMS-A-9001', 'prasath.mohan@hlms.example.com', NULL,
     4000000, 20, 'Home Purchase', 8.50, 'NPA', 5, 6, '{}'::jsonb,
     NOW(), NOW() - INTERVAL '400 days', 'Prasath Mohan', '9888855555', 'PRAMO3456D',
     'Pune', 'Maharashtra', '411014',
     'Flat 402, Silver Oak Residency, Kharadi, Pune', 'Apartment', 5200000),

    ('APP-9002', 'HLMS-A-9002', 'prasath.mohan@hlms.example.com', NULL,
     5500000, 25, 'Home Purchase', 8.75, 'NPA', 5, 6, '{}'::jsonb,
     NOW(), NOW() - INTERVAL '520 days', 'Prasath Mohan', '9888855555', 'PRAMO3456D',
     'Bengaluru', 'Karnataka', '560103',
     'No. 18, Brookfield Layout, Whitefield, Bengaluru', 'Independent House', 7100000),

    ('APP-9003', 'HLMS-A-9003', 'prasath.mohan@hlms.example.com', NULL,
     2800000, 15, 'Home Construction', 8.60, 'NPA', 5, 6, '{}'::jsonb,
     NOW(), NOW() - INTERVAL '365 days', 'Prasath Mohan', '9888855555', 'PRAMO3456D',
     'Coimbatore', 'Tamil Nadu', '641028',
     'Plot 27, Vellalore Main Road, Coimbatore', 'Plot', 3600000),

    ('APP-9004', 'HLMS-A-9004', 'prasath.mohan@hlms.example.com', NULL,
     7800000, 30, 'Home Purchase', 8.40, 'NPA', 5, 6, '{}'::jsonb,
     NOW(), NOW() - INTERVAL '610 days', 'Prasath Mohan', '9888855555', 'PRAMO3456D',
     'Hyderabad', 'Telangana', '500081',
     'Villa 9, Palm Meadows, Gachibowli, Hyderabad', 'Villa', 9900000),

    ('APP-9005', 'HLMS-A-9005', 'prasath.mohan@hlms.example.com', NULL,
     2100000, 15, 'Home Purchase', 8.90, 'NPA', 5, 6, '{}'::jsonb,
     NOW(), NOW() - INTERVAL '700 days', 'Prasath Mohan', '9888855555', 'PRAMO3456D',
     'Nagpur', 'Maharashtra', '440015',
     'Flat 12B, Shreeji Heights, Dharampeth, Nagpur', 'Apartment', 2900000)
ON CONFLICT (app_id) DO NOTHING;


-- ---------------------------------------------------------------------
-- 3. Auction cases  (5 rows)
--
-- stage MUST be exactly 'Auction Scheduled' — that is the only stage the
-- Bidder Portal treats as publicly listed.
--
-- Bidding is open while auction_date is in the FUTURE, so the dates are
-- relative to NOW() and the demo keeps working tomorrow:
--   APP-9001  +12 days  open
--   APP-9002   +6 days  open
--   APP-9003  +20 days  open, no bids yet
--   APP-9004   +1 day   open, "closing soon"
--   APP-9005   -5 days  CLOSED  -> appears under the Closed tab
--
-- auction_id is BIGSERIAL / IDENTITY, so it is omitted deliberately.
-- ---------------------------------------------------------------------
INSERT INTO auction_case
    (app_id, stage, notice_date, notice_due_date, demand_amount,
     possession_date, auction_date, reserve_price)
VALUES
    ('APP-9001', 'Auction Scheduled', CURRENT_DATE - 180, CURRENT_DATE - 120,
     3850000, CURRENT_DATE - 90,  CURRENT_DATE + 12, 4500000),

    ('APP-9002', 'Auction Scheduled', CURRENT_DATE - 210, CURRENT_DATE - 150,
     5300000, CURRENT_DATE - 100, CURRENT_DATE + 6,  6200000),

    ('APP-9003', 'Auction Scheduled', CURRENT_DATE - 160, CURRENT_DATE - 100,
     2650000, CURRENT_DATE - 70,  CURRENT_DATE + 20, 3100000),

    ('APP-9004', 'Auction Scheduled', CURRENT_DATE - 240, CURRENT_DATE - 180,
     7450000, CURRENT_DATE - 130, CURRENT_DATE + 1,  8750000),

    ('APP-9005', 'Auction Scheduled', CURRENT_DATE - 300, CURRENT_DATE - 240,
     2000000, CURRENT_DATE - 190, CURRENT_DATE - 5,  2400000)
ON CONFLICT (app_id) DO NOTHING;


-- ---------------------------------------------------------------------
-- 4. Bids  (10 rows)
--
-- Every amount here satisfies the backend's own rules in
-- BidServiceImpl.validate(): >= reserve price, and each successive bid
-- on the same app_id strictly beats the previous highest.
--
-- Three bidders take part:
--   Mohan Prasath   mohan.prasath@...   <- the demo login ("you")
--   Mohan           mohan@...           <- rival
--   Prasath         prasath@...         <- rival
--
-- Designed so the demo login sees all three states at once:
--   APP-9001  you lead                   -> "Highest Bidder"
--   APP-9002  you were outbid            -> "Outbid"
--   APP-9003  no bids at all             -> "No bids yet — reserve price applies"
--   APP-9004  you have not bid           -> clean form, existing history
--   APP-9005  closed                     -> bidding locked, history visible
-- ---------------------------------------------------------------------
INSERT INTO bid (bid_id, app_id, bidder_email, bid_amount, created_at)
VALUES
    -- APP-9001 (reserve 4,500,000) — the demo login ends up highest
    ('BID-DEMO0001', 'APP-9001', 'prasath@hlms.example.com',       4500000, NOW() - INTERVAL '6 days'),
    ('BID-DEMO0002', 'APP-9001', 'mohan@hlms.example.com',         4600000, NOW() - INTERVAL '5 days'),
    ('BID-DEMO0003', 'APP-9001', 'mohan.prasath@hlms.example.com', 4700000, NOW() - INTERVAL '3 days'),

    -- APP-9002 (reserve 6,200,000) — demo login bids first, then gets outbid
    ('BID-DEMO0004', 'APP-9002', 'mohan.prasath@hlms.example.com', 6200000, NOW() - INTERVAL '8 days'),
    ('BID-DEMO0005', 'APP-9002', 'prasath@hlms.example.com',       6300000, NOW() - INTERVAL '4 days'),
    ('BID-DEMO0006', 'APP-9002', 'mohan@hlms.example.com',         6450000, NOW() - INTERVAL '2 days'),

    -- APP-9004 (reserve 8,750,000) — rivals only, demo login has not bid
    ('BID-DEMO0007', 'APP-9004', 'mohan@hlms.example.com',         8750000, NOW() - INTERVAL '9 days'),
    ('BID-DEMO0008', 'APP-9004', 'prasath@hlms.example.com',       8900000, NOW() - INTERVAL '7 days'),

    -- APP-9005 (reserve 2,400,000) — closed auction, demo login lost
    ('BID-DEMO0009', 'APP-9005', 'mohan.prasath@hlms.example.com', 2400000, NOW() - INTERVAL '20 days'),
    ('BID-DEMO0010', 'APP-9005', 'mohan@hlms.example.com',         2500000, NOW() - INTERVAL '18 days')
ON CONFLICT (bid_id) DO NOTHING;

COMMIT;


-- =====================================================================
-- Verify what landed
-- =====================================================================
SELECT a.app_id,
       l.property_address,
       a.reserve_price,
       a.auction_date,
       CASE WHEN a.auction_date > CURRENT_DATE THEN 'OPEN' ELSE 'CLOSED' END AS bidding,
       COUNT(b.bid_id)   AS bids,
       MAX(b.bid_amount) AS highest
FROM auction_case a
JOIN loan_application l ON l.app_id = a.app_id
LEFT JOIN bid b ON b.app_id = a.app_id AND b.deleted_at IS NULL
WHERE a.app_id LIKE 'APP-900%' AND a.deleted_at IS NULL
GROUP BY a.app_id, l.property_address, a.reserve_price, a.auction_date
ORDER BY a.auction_date;


-- =====================================================================
-- Expected result in the portal, logged in as mohan.prasath@hlms.example.com
-- =====================================================================
--   Dashboard   My Total Bids 3 · Currently Highest On 1 · Listed All-Time 5
--   Listings    Open for Bidding (4) · Closed (1)
--   My Bids     3 rows — APP-9001 Highest Bidder, APP-9002 Outbid,
--                        APP-9005 Outbid (closed)
--
-- =====================================================================
-- Before you run this
-- =====================================================================
-- 1. Table names above are the JPA @Table names from the entities:
--    app_user, loan_application, auction_case, bid. If your schema was
--    created from an hlms_schema_*.sql file rather than by Hibernate,
--    diff the column lists first.
--
-- 2. loan-service runs with ddl-auto=none, so loan_application must
--    already exist. user-service and repayment-service use
--    ddl-auto=update and will have created their own tables on startup.
--
-- 3. Notifications are NOT seeded here. Notification.channels is an
--    unannotated List<String>, so its physical column type depends on
--    how Hibernate mapped it (text[] vs serialized bytes) and I could
--    not confirm it from the source. Seed those through the API instead:
--
--      POST /notification-service/api/notifications
--      { "userEmail": "mohan.prasath@hlms.example.com",
--        "title": "New Property Listed for e-Auction",
--        "body": "Flat 402, Silver Oak Residency, Kharadi, Pune.",
--        "channels": ["inapp"] }
--
--    The bell menu simply shows an empty list until then — nothing
--    breaks.
--
-- 4. To reset:
--      DELETE FROM bid              WHERE bid_id  LIKE 'BID-DEMO%';
--      DELETE FROM auction_case     WHERE app_id  LIKE 'APP-900%';
--      DELETE FROM loan_application WHERE app_id  LIKE 'APP-900%';
--      DELETE FROM app_user         WHERE email IN (
--        'mohan.prasath@hlms.example.com','mohan@hlms.example.com',
--        'prasath@hlms.example.com','prasath.mohan@hlms.example.com');
