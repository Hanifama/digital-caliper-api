-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuyu', 'H-BEAM', 'HB 200X204X12X12', 'HB 200X204X12X12', '200X204X12X12', 'H-BEAM 200X204X12X12', 'HB 200X204X12X12', 'Template HB 200X204X12X12', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuyu','H(H-top)','number',198,199,200,201,202,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuyu','C(H-top)','number',198,199,200,201,202,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuyu','T(H-top)','number',198,199,200,201,202,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuyu','H(H-bottom)','number',198,199,200,201,202,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuyu','C(H-bottom)','number',198,199,200,201,202,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuyu','T(H-bottom)','number',198,199,200,201,202,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuyu','H(B1)','number',201,202.5,204,205.5,207,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuyu','C(B1)','number',201,202.5,204,205.5,207,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuyu','T(B1)','number',201,202.5,204,205.5,207,NULL,9,true,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuyu','H(B2)','number',201,202.5,204,205.5,207,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuyu','C(B2)','number',201,202.5,204,205.5,207,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuyu','T(B2)','number',201,202.5,204,205.5,207,NULL,12,true,'','B2','table'),

-- b1 (13-15)
('H.b1','TMP-rtxtuyu','H(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuyu','C(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuyu','T(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,15,true,'','b1','table'),

-- b3 (16-18)
('H.b3','TMP-rtxtuyu','H(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuyu','C(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuyu','T(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,18,true,'','b3','table'),

-- b2 (19-21)
('H.b2','TMP-rtxtuyu','H(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuyu','C(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuyu','T(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,21,true,'','b2','table'),

-- b4 (22-24)
('H.b4','TMP-rtxtuyu','H(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuyu','C(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuyu','T(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27)
('H.b1-b2/2','TMP-rtxtuyu','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuyu','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuyu','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-rtxtuyu','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuyu','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuyu','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-rtxtuyu','H(t1)','number',11,11.5,12,12.5,13,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuyu','C(t1)','number',11,11.5,12,12.5,13,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuyu','T(t1)','number',11,11.5,12,12.5,13,NULL,33,true,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuyu','H(t3)','number',11,11.5,12,12.5,13,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuyu','C(t3)','number',11,11.5,12,12.5,13,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuyu','T(t3)','number',11,11.5,12,12.5,13,NULL,36,true,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuyu','H(t2)','number',11,11.5,12,12.5,13,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuyu','C(t2)','number',11,11.5,12,12.5,13,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuyu','T(t2)','number',11,11.5,12,12.5,13,NULL,39,true,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuyu','H(t4)','number',11,11.5,12,12.5,13,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuyu','C(t4)','number',11,11.5,12,12.5,13,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuyu','T(t4)','number',11,11.5,12,12.5,13,NULL,42,true,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuyu','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuyu','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuyu','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - dengan order_numb NULL
('H.t6','TMP-rtxtuyu','H(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuyu','C(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuyu','T(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - dengan order_numb NULL
('H.t7','TMP-rtxtuyu','H(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuyu','C(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuyu','T(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuyu','Height of Flange','number',201,202.5,204,205.5,207,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuyu','Flange Thickness','number',11,11.5,12,12.5,13,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuyu','Width of Web','number',198,199,200,201,202,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuyu','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuyu','Unit Weight (Kgm)','number',54.0,55.1,56.2,57.3,58.4,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuyu','Radius','number',0,0,13,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuyu','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuyu','OS','number',0,0,2.04,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxtuyu','CoW','number',0,0,0,0,0,2,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Flange Thickness', 't4', 2),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b1', 3),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b2', 4),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b3', 5),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b4', 6),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'OS', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Radius', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'CoW', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b1-b2/2', 7),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Off Center', 'b3-b4/2', 8),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Thickness', 't6', 9),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-rtxtuyu', 'Web Thickness', 't7', 10);