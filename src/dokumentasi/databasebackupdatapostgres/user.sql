INSERT INTO "user" (
  user_id, role_id, username, full_name, name, email, password, departement, image, last_login, status, location_id
)
VALUES
-- Manajer
('manajer-550e8400-e29b-41d4-a716-446655440000', '2', 'manajerQC', 'Akun Testing Manajer', 'Budi', 'manajer@gys.id', '$2b$10$6d7ECJA7XNuE6OlYA1dwF.s0XVmo0K6otetRaY0onkBz5uQEXgzBm', 'Manajer QC', NULL, NULL, 1, 'LOC001'),

-- Operator
('operator-660e8400-e29b-41d4-a716-446655440111', '1', 'operatorQC', 'Akun Testing Operator', 'Siti', 'operator@gys.id', '$2b$10$6d7ECJA7XNuE6OlYA1dwF.s0XVmo0K6otetRaY0onkBz5uQEXgzBm', 'Operator QC', NULL, NULL, 2, 'LOC002');