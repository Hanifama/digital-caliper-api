-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzh', 'H-BEAM', 'HB 428X407X20X35', 'HB 428X407X20X35', '428X407X20X35', 'H-BEAM 428X407X20X35', 'HB 428X407X20X35', 'Template HB 428X407X20X35', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxtuzh','H(H-top)','number',425,426.5,428,429.5,431,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzh','C(H-top)','number',425,426.5,428,429.5,431,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzh','T(H-top)','number',425,426.5,428,429.5,431,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxtuzh','H(H-bottom)','number',425,426.5,428,429.5,431,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzh','C(H-bottom)','number',425,426.5,428,429.5,431,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzh','T(H-bottom)','number',425,426.5,428,429.5,431,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxtuzh','H(B1)','number',404,405.5,407,408.5,410,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzh','C(B1)','number',404,405.5,407,408.5,410,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzh','T(B1)','number',404,405.5,407,408.5,410,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxtuzh','H(B2)','number',404,405.5,407,408.5,410,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzh','C(B2)','number',404,405.5,407,408.5,410,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzh','T(B2)','number',404,405.5,407,408.5,410,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxtuzh','H(b1)','number',33.3,34.15,35,35.85,36.7,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzh','C(b1)','number',33.3,34.15,35,35.85,36.7,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzh','T(b1)','number',33.3,34.15,35,35.85,36.7,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxtuzh','H(b3)','number',33.3,34.15,35,35.85,36.7,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzh','C(b3)','number',33.3,34.15,35,35.85,36.7,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzh','T(b3)','number',33.3,34.15,35,35.85,36.7,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxtuzh','H(b2)','number',33.3,34.15,35,35.85,36.7,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzh','C(b2)','number',33.3,34.15,35,35.85,36.7,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzh','T(b2)','number',33.3,34.15,35,35.85,36.7,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxtuzh','H(b4)','number',33.3,34.15,35,35.85,36.7,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzh','C(b4)','number',33.3,34.15,35,35.85,36.7,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzh','T(b4)','number',33.3,34.15,35,35.85,36.7,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2','TMP-rtxtuzh','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzh','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzh','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2','TMP-rtxtuzh','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzh','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzh','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxtuzh','H(t1)','number',33.3,34.15,35,35.85,36.7,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzh','C(t1)','number',33.3,34.15,35,35.85,36.7,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzh','T(t1)','number',33.3,34.15,35,35.85,36.7,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxtuzh','H(t3)','number',33.3,34.15,35,35.85,36.7,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzh','C(t3)','number',33.3,34.15,35,35.85,36.7,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzh','T(t3)','number',33.3,34.15,35,35.85,36.7,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxtuzh','H(t2)','number',33.3,34.15,35,35.85,36.7,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzh','C(t2)','number',33.3,34.15,35,35.85,36.7,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzh','T(t2)','number',33.3,34.15,35,35.85,36.7,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxtuzh','H(t4)','number',33.3,34.15,35,35.85,36.7,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzh','C(t4)','number',33.3,34.15,35,35.85,36.7,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzh','T(t4)','number',33.3,34.15,35,35.85,36.7,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxtuzh','H(t5)','number',19,19.5,20,20.5,21,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzh','C(t5)','number',19,19.5,20,20.5,21,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzh','T(t5)','number',19,19.5,20,20.5,21,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t6','TMP-rtxtuzh','H(t6)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzh','C(t6)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzh','T(t6)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t7','TMP-rtxtuzh','H(t7)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzh','C(t7)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzh','T(t7)','number',19,19.5,20,20.5,21,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuzh','Height of Flange','number',404,405.5,407,408.5,410,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzh','Flange Thickness','number',33.3,34.15,35,35.85,36.7,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzh','Width of Web','number',425,426.5,428,429.5,431,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzh','Web Thickness','number',19,19.5,20,20.5,21,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzh','Unit Weight (Kgm)','number',271.7,277.35,283,288.65,294.3,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzh','Radius','number',0,0,22,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzh','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzh','OS','number',0,0,4.88,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxtuzh','CoW','number',0,0,0,0,0,2.5,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 't4', 7),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 'b1', 3),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 't1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Width of Web', 'H-Top', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 'b2', 4), 
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 'b3', 5), 
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 'b4', 6),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 't2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Height of Flange', 'B2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'OS', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Flange Thickness', 't3', 2),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Radius', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Unit Weight (Kgm)', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Height of Flange', 'B1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'CoW', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Web Thickness', 't5', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Web Thickness', 't6', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Web Thickness', 't7', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Web Off Center', 'b1-b2/2', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzh', 'Web Off Center', 'b3-b4/2', 1);