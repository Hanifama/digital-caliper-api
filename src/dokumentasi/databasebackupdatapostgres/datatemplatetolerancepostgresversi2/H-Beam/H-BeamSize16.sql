-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuze', 'H-BEAM', 'HB 400X400X13X21', 'HB 400X400X13X21', '400X400X13X21', 'H-BEAM 400X400X13X21', 'HB 400X400X13X21', 'Template HB 400X400X13X21', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuze','H(H-top)','number',397,398.5,400,401.5,403,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuze','C(H-top)','number',397,398.5,400,401.5,403,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuze','T(H-top)','number',397,398.5,400,401.5,403,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuze','H(H-bottom)','number',397,398.5,400,401.5,403,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuze','C(H-bottom)','number',397,398.5,400,401.5,403,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuze','T(H-bottom)','number',397,398.5,400,401.5,403,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuze','H(B1)','number',397,398.5,400,401.5,403,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuze','C(B1)','number',397,398.5,400,401.5,403,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuze','T(B1)','number',397,398.5,400,401.5,403,NULL,9,true,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuze','H(B2)','number',397,398.5,400,401.5,403,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuze','C(B2)','number',397,398.5,400,401.5,403,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuze','T(B2)','number',397,398.5,400,401.5,403,NULL,12,true,'','B2','table'),

-- b1 (13-15) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b1','TMP-rtxtuze','H(b1)','number',19.5,20.25,21,21.75,22.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuze','C(b1)','number',19.5,20.25,21,21.75,22.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuze','T(b1)','number',19.5,20.25,21,21.75,22.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b3','TMP-rtxtuze','H(b3)','number',19.5,20.25,21,21.75,22.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuze','C(b3)','number',19.5,20.25,21,21.75,22.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuze','T(b3)','number',19.5,20.25,21,21.75,22.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b2','TMP-rtxtuze','H(b2)','number',19.5,20.25,21,21.75,22.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuze','C(b2)','number',19.5,20.25,21,21.75,22.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuze','T(b2)','number',19.5,20.25,21,21.75,22.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b4','TMP-rtxtuze','H(b4)','number',19.5,20.25,21,21.75,22.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuze','C(b4)','number',19.5,20.25,21,21.75,22.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuze','T(b4)','number',19.5,20.25,21,21.75,22.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b1-b2/2','TMP-rtxtuze','H(b1-b2/2)','number',19.5,20.25,21,21.75,22.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuze','C(b1-b2/2)','number',19.5,20.25,21,21.75,22.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuze','T(b1-b2/2)','number',19.5,20.25,21,21.75,22.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - TOLERANSI DIUBAH SESUAI FLANGE THICKNESS (19.5-22.5)
('H.b3-b4/2','TMP-rtxtuze','H(b3-b4/2)','number',19.5,20.25,21,21.75,22.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuze','C(b3-b4/2)','number',19.5,20.25,21,21.75,22.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuze','T(b3-b4/2)','number',19.5,20.25,21,21.75,22.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-rtxtuze','H(t1)','number',19.5,20.25,21,21.75,22.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuze','C(t1)','number',19.5,20.25,21,21.75,22.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuze','T(t1)','number',19.5,20.25,21,21.75,22.5,NULL,33,true,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuze','H(t3)','number',19.5,20.25,21,21.75,22.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuze','C(t3)','number',19.5,20.25,21,21.75,22.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuze','T(t3)','number',19.5,20.25,21,21.75,22.5,NULL,36,true,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuze','H(t2)','number',19.5,20.25,21,21.75,22.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuze','C(t2)','number',19.5,20.25,21,21.75,22.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuze','T(t2)','number',19.5,20.25,21,21.75,22.5,NULL,39,true,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuze','H(t4)','number',19.5,20.25,21,21.75,22.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuze','C(t4)','number',19.5,20.25,21,21.75,22.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuze','T(t4)','number',19.5,20.25,21,21.75,22.5,NULL,42,true,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuze','H(t5)','number',12.3,12.65,13,13.35,13.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuze','C(t5)','number',12.3,12.65,13,13.35,13.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuze','T(t5)','number',12.3,12.65,13,13.35,13.7,NULL,45,true,'','t5','table'),

-- t6 (46-48) - order_numb disesuaikan
('H.t6','TMP-rtxtuze','H(t6)','number',12.3,12.65,13,13.35,13.7,NULL,46,true,'','t6','table'),
('C.t6','TMP-rtxtuze','C(t6)','number',12.3,12.65,13,13.35,13.7,NULL,47,true,'','t6','table'),
('T.t6','TMP-rtxtuze','T(t6)','number',12.3,12.65,13,13.35,13.7,NULL,48,true,'','t6','table'),

-- t7 (49-51) - order_numb disesuaikan
('H.t7','TMP-rtxtuze','H(t7)','number',12.3,12.65,13,13.35,13.7,NULL,49,true,'','t7','table'),
('C.t7','TMP-rtxtuze','C(t7)','number',12.3,12.65,13,13.35,13.7,NULL,50,true,'','t7','table'),
('T.t7','TMP-rtxtuze','T(t7)','number',12.3,12.65,13,13.35,13.7,NULL,51,true,'','t7','table'),

-- FormRight (52-60)
('height.of.flange','TMP-rtxtuze','Height of Flange','number',397,398.5,400,401.5,403,0,52,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuze','Flange Thickness','number',19.5,20.25,21,21.75,22.5,0,53,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuze','Width of Web','number',397,398.5,400,401.5,403,0,54,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuze','Web Thickness','number',12.3,12.65,13,13.35,13.7,0,55,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuze','Unit Weight (Kgm)','number',165.1,168.55,172,175.45,178.9,0,56,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuze','Radius','number',0,0,22,0,0,0,57,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuze','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuze','OS','number',0,0,4.80,0,0,0,59,true,'','FormRight','OS'),
('cow','TMP-rtxtuze','CoW','number',0,0,0,0,0,2.5,60,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b1', 4),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b2', 5),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b3', 6),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b4', 7),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'OS', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Radius', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'CoW', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Web Thickness', 't5', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Web Thickness', 't6', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Web Thickness', 't7', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b1-b2/2', 8),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuze', 'Flange Thickness', 'b3-b4/2', 9);  -- DIUBAH: dari Web Off Center ke Flange Thickness