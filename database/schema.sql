CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(120),
    delivery_platform VARCHAR(50),
    vehicle_type VARCHAR(50),
    aadhaar_last4 CHAR(4),
    profile_completed BIT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS plans (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(40) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL,
    weekly_price DECIMAL(10, 2) NOT NULL,
    coverage_amount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS subscriptions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    plan_id BIGINT NOT NULL,
    plan_type VARCHAR(120) NOT NULL,
    weekly_price DECIMAL(10, 2) NOT NULL,
    coverage_amount DECIMAL(10, 2) NOT NULL,
    payment_reference VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(30) NOT NULL,
    CONSTRAINT fk_subscription_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_subscription_plan FOREIGN KEY (plan_id) REFERENCES plans(id)
);

INSERT INTO plans (code, name, weekly_price, coverage_amount)
SELECT 'BASIC', 'Basic', 10.00, 200.00
WHERE NOT EXISTS (SELECT 1 FROM plans WHERE code = 'BASIC');

INSERT INTO plans (code, name, weekly_price, coverage_amount)
SELECT 'STANDARD', 'Standard', 20.00, 400.00
WHERE NOT EXISTS (SELECT 1 FROM plans WHERE code = 'STANDARD');

INSERT INTO plans (code, name, weekly_price, coverage_amount)
SELECT 'PREMIUM', 'Premium', 30.00, 600.00
WHERE NOT EXISTS (SELECT 1 FROM plans WHERE code = 'PREMIUM');
