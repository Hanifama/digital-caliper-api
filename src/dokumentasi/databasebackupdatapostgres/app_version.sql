INSERT INTO app_versions (
  id,
  version_code,
  platform,
  version_name,
  version_description,
  is_latest,
  is_allowed,
  released_date,
  created_by,
  updated_by
) VALUES
  -- Android
  (uuid_generate_v4(), '1.0.0', 'android', 'Initial Release', 'Rilis pertama aplikasi Android.', true, true, NOW(), 'system', 'system'),
  (uuid_generate_v4(), '0.9.0', 'android', 'Beta Staging', 'Versi beta Android.', false, false, '2025-09-01 00:00:00', 'system', 'system'),

  -- iOS
  (uuid_generate_v4(), '1.0.0', 'ios', 'Initial Release', 'Rilis pertama aplikasi iOS.', true, true, NOW(), 'system', 'system'),
  (uuid_generate_v4(), '0.9.0', 'ios', 'Beta', 'Versi beta iOS.', false, false, '2025-09-01 00:00:00', 'system', 'system'),

  -- Web
  (uuid_generate_v4(), '1.0.0', 'web', 'Initial Release', 'Rilis pertama aplikasi Web.', true, true, NOW(), 'system', 'system'),
  (uuid_generate_v4(), '0.9.0', 'web', 'Beta', 'Versi beta Web.', false, false, '2025-09-01 00:00:00', 'system', 'system');
