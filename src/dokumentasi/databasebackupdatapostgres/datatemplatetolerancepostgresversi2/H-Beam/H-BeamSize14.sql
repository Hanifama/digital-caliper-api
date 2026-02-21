-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzc', 'H-BEAM', 'HB 388X402X15X15', 'HB 388X402X15X15', '388X402X15X15', 'H-BEAM 388X402X15X15', 'HB 388X402X15X15', 'Template HB 388X402X15X15', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxtuzc','H(H-top)','number',386,387,388,389,390,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzc','C(H-top)','number',386,387,388,389,390,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzc','T(H-top)','number',386,387,388,389,390,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxtuzc','H(H-bottom)','number',386,387,388,389,390,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzc','C(H-bottom)','number',386,387,388,389,390,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzc','T(H-bottom)','number',386,387,388,389,390,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxtuzc','H(B1)','number',399,400.5,402,403.5,405,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzc','C(B1)','number',399,400.5,402,403.5,405,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzc','T(B1)','number',399,400.5,402,403.5,405,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxtuzc','H(B2)','number',399,400.5,402,403.5,405,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzc','C(B2)','number',399,400.5,402,403.5,405,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzc','T(B2)','number',399,400.5,402,403.5,405,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxtuzc','H(b1)','number',14,14.5,15,15.5,16,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzc','C(b1)','number',14,14.5,15,15.5,16,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzc','T(b1)','number',14,14.5,15,15.5,16,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxtuzc','H(b3)','number',14,14.5,15,15.5,16,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzc','C(b3)','number',14,14.5,15,15.5,16,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzc','T(b3)','number',14,14.5,15,15.5,16,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxtuzc','H(b2)','number',14,14.5,15,15.5,16,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzc','C(b2)','number',14,14.5,15,15.5,16,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzc','T(b2)','number',14,14.5,15,15.5,16,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxtuzc','H(b4)','number',14,14.5,15,15.5,16,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzc','C(b4)','number',14,14.5,15,15.5,16,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzc','T(b4)','number',14,14.5,15,15.5,16,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC 
('H.b1-b2/2','TMP-rtxtuzc','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzc','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzc','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC 
('H.b3-b4/2','TMP-rtxtuzc','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzc','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzc','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxtuzc','H(t1)','number',14,14.5,15,15.5,16,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzc','C(t1)','number',14,14.5,15,15.5,16,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzc','T(t1)','number',14,14.5,15,15.5,16,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxtuzc','H(t3)','number',14,14.5,15,15.5,16,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzc','C(t3)','number',14,14.5,15,15.5,16,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzc','T(t3)','number',14,14.5,15,15.5,16,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxtuzc','H(t2)','number',14,14.5,15,15.5,16,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzc','C(t2)','number',14,14.5,15,15.5,16,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzc','T(t2)','number',14,14.5,15,15.5,16,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxtuzc','H(t4)','number',14,14.5,15,15.5,16,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzc','C(t4)','number',14,14.5,15,15.5,16,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzc','T(t4)','number',14,14.5,15,15.5,16,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxtuzc','H(t5)','number',14.3,14.65,15,15.35,15.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzc','C(t5)','number',14.3,14.65,15,15.35,15.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzc','T(t5)','number',14.3,14.65,15,15.35,15.7,NULL,45,true,'','t5','table'),

-- t6 (46-48) - Web Thickness = Tebal Web dengan order_numb berurutan
('H.t6','TMP-rtxtuzc','H(t6)','number',14.3,14.65,15,15.35,15.7,NULL,46,true,'','t6','table'),
('C.t6','TMP-rtxtuzc','C(t6)','number',14.3,14.65,15,15.35,15.7,NULL,47,true,'','t6','table'),
('T.t6','TMP-rtxtuzc','T(t6)','number',14.3,14.65,15,15.35,15.7,NULL,48,true,'','t6','table'),

-- t7 (49-51) - Web Thickness = Tebal Web dengan order_numb berurutan
('H.t7','TMP-rtxtuzc','H(t7)','number',14.3,14.65,15,15.35,15.7,NULL,49,true,'','t7','table'),
('C.t7','TMP-rtxtuzc','C(t7)','number',14.3,14.65,15,15.35,15.7,NULL,50,true,'','t7','table'),
('T.t7','TMP-rtxtuzc','T(t7)','number',14.3,14.65,15,15.35,15.7,NULL,51,true,'','t7','table'),

-- FormRight (52-60)
('height.of.flange','TMP-rtxtuzc','Height of Flange','number',399,400.5,402,403.5,405,0,52,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzc','Flange Thickness','number',14,14.5,15,15.5,16,0,53,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzc','Width of Web','number',386,387,388,389,390,0,54,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzc','Web Thickness','number',14.3,14.65,15,15.35,15.7,0,55,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzc','Unit Weight (Kgm)','number',134.4,137.2,140,142.8,145.6,0,56,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzc','Radius','number',0,0,22,0,0,0,57,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzc','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzc','OS','number',0,0,4.82,0,0,0,59,true,'','FormRight','OS'),
('cow','TMP-rtxtuzc','CoW','number',0,0,0,0,0,2,60,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 't4', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 'b1', 3),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 'b2', 4), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 'b3', 5),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 'b4', 6), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'OS', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Radius', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'CoW', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Web Thickness', 't5', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Web Off Center', 'b1-b2/2', 7),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Web Off Center', 'b3-b4/2', 8),  -- DIUBAH: dari Web Off Center ke Flange Thickness
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Web Thickness', 't6', 9),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzc', 'Web Thickness', 't7', 10);