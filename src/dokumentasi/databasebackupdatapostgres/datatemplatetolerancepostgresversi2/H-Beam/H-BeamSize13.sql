-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxfdzb', 'H-BEAM', 'HB 350X350X12X19', 'HB 350X350X12X19', '350X350X12X19', 'H-BEAM 350X350X12X19', 'HB 350X350X12X19', 'Template HB 350X350X12X19', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxfdzb','H(H-top)','number',348,349,350,351,352,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxfdzb','C(H-top)','number',348,349,350,351,352,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxfdzb','T(H-top)','number',348,349,350,351,352,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxfdzb','H(H-bottom)','number',348,349,350,351,352,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxfdzb','C(H-bottom)','number',348,349,350,351,352,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxfdzb','T(H-bottom)','number',348,349,350,351,352,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxfdzb','H(B1)','number',347,348.5,350,351.5,353,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxfdzb','C(B1)','number',347,348.5,350,351.5,353,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxfdzb','T(B1)','number',347,348.5,350,351.5,353,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxfdzb','H(B2)','number',347,348.5,350,351.5,353,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxfdzb','C(B2)','number',347,348.5,350,351.5,353,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxfdzb','T(B2)','number',347,348.5,350,351.5,353,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxfdzb','H(b1)','number',17.5,18.25,19,19.75,20.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxfdzb','C(b1)','number',17.5,18.25,19,19.75,20.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxfdzb','T(b1)','number',17.5,18.25,19,19.75,20.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxfdzb','H(b3)','number',17.5,18.25,19,19.75,20.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxfdzb','C(b3)','number',17.5,18.25,19,19.75,20.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxfdzb','T(b3)','number',17.5,18.25,19,19.75,20.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxfdzb','H(b2)','number',17.5,18.25,19,19.75,20.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxfdzb','C(b2)','number',17.5,18.25,19,19.75,20.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxfdzb','T(b2)','number',17.5,18.25,19,19.75,20.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxfdzb','H(b4)','number',17.5,18.25,19,19.75,20.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxfdzb','C(b4)','number',17.5,18.25,19,19.75,20.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxfdzb','T(b4)','number',17.5,18.25,19,19.75,20.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC 
('H.b1-b2/2','TMP-rtxfdzb','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxfdzb','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxfdzb','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC 
('H.b3-b4/2','TMP-rtxfdzb','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxfdzb','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxfdzb','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxfdzb','H(t1)','number',17.5,18.25,19,19.75,20.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxfdzb','C(t1)','number',17.5,18.25,19,19.75,20.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxfdzb','T(t1)','number',17.5,18.25,19,19.75,20.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxfdzb','H(t3)','number',17.5,18.25,19,19.75,20.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxfdzb','C(t3)','number',17.5,18.25,19,19.75,20.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxfdzb','T(t3)','number',17.5,18.25,19,19.75,20.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxfdzb','H(t2)','number',17.5,18.25,19,19.75,20.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxfdzb','C(t2)','number',17.5,18.25,19,19.75,20.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxfdzb','T(t2)','number',17.5,18.25,19,19.75,20.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxfdzb','H(t4)','number',17.5,18.25,19,19.75,20.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxfdzb','C(t4)','number',17.5,18.25,19,19.75,20.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxfdzb','T(t4)','number',17.5,18.25,19,19.75,20.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxfdzb','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxfdzb','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxfdzb','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t6','TMP-rtxfdzb','H(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxfdzb','C(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxfdzb','T(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t7','TMP-rtxfdzb','H(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxfdzb','C(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxfdzb','T(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxfdzb','Height of Flange','number',347,348.5,350,351.5,353,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxfdzb','Flange Thickness','number',17.5,18.25,19,19.75,20.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxfdzb','Width of Web','number',348,349,350,351,352,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxfdzb','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxfdzb','Unit Weight (Kgm)','number',129.6,132.3,135,137.7,140.4,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxfdzb','Radius','number',0,0,13,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxfdzb','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxfdzb','OS','number',0,0,4.20,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxfdzb','CoW','number',0,0,0,0,0,2,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 't4', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 'b1', 3), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 'b2', 4), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 'b3', 5),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 'b4', 6), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'OS', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Radius', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'CoW', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Web Thickness', 't5', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Web Off Center', 'b1-b2/2', 7),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Web Off Center', 'b3-b4/2', 8),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Web Thickness', 't6', 9),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxfdzb', 'Web Thickness', 't7', 10);