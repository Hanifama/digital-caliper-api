-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuyv', 'H-BEAM', 'HB 250X250X9X14', 'HB 250X250X9X14', '250X250X9X14', 'H-BEAM 250X250X9X14', 'HB 250X250X9X14', 'Template HB 250X250X9X14', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuyv','H(H-top)','number',248,249,250,251,252,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuyv','C(H-top)','number',248,249,250,251,252,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuyv','T(H-top)','number',248,249,250,251,252,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuyv','H(H-bottom)','number',248,249,250,251,252,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuyv','C(H-bottom)','number',248,249,250,251,252,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuyv','T(H-bottom)','number',248,249,250,251,252,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuyv','H(B1)','number',247,248.5,250,251.5,253,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtuyv','C(B1)','number',247,248.5,250,251.5,253,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtuyv','T(B1)','number',247,248.5,250,251.5,253,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuyv','H(B2)','number',247,248.5,250,251.5,253,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtuyv','C(B2)','number',247,248.5,250,251.5,253,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtuyv','T(B2)','number',247,248.5,250,251.5,253,NULL,12,1,'','B2','table'),

-- t1 (13-15)
('H.t1','TMP-rtxtuyv','H(t1)','number',13,13.5,14,14.5,15,NULL,13,1,'','t1','table'),
('C.t1','TMP-rtxtuyv','C(t1)','number',13,13.5,14,14.5,15,NULL,14,1,'','t1','table'),
('T.t1','TMP-rtxtuyv','T(t1)','number',13,13.5,14,14.5,15,NULL,15,1,'','t1','table'),

-- t2 (16-18)
('H.t2','TMP-rtxtuyv','H(t2)','number',13,13.5,14,14.5,15,NULL,16,1,'','t2','table'),
('C.t2','TMP-rtxtuyv','C(t2)','number',13,13.5,14,14.5,15,NULL,17,1,'','t2','table'),
('T.t2','TMP-rtxtuyv','T(t2)','number',13,13.5,14,14.5,15,NULL,18,1,'','t2','table'),

-- t3 (19-21)
('H.t3','TMP-rtxtuyv','H(t3)','number',13,13.5,14,14.5,15,NULL,19,1,'','t3','table'),
('C.t3','TMP-rtxtuyv','C(t3)','number',13,13.5,14,14.5,15,NULL,20,1,'','t3','table'),
('T.t3','TMP-rtxtuyv','T(t3)','number',13,13.5,14,14.5,15,NULL,21,1,'','t3','table'),

-- t4 (22-24)
('H.t4','TMP-rtxtuyv','H(t4)','number',13,13.5,14,14.5,15,NULL,22,1,'','t4','table'),
('C.t4','TMP-rtxtuyv','C(t4)','number',13,13.5,14,14.5,15,NULL,23,1,'','t4','table'),
('T.t4','TMP-rtxtuyv','T(t4)','number',13,13.5,14,14.5,15,NULL,24,1,'','t4','table'),

-- t5 (25-27)
('H.t5','TMP-rtxtuyv','H(t5)','number',8.3,8.65,9,9.35,9.7,NULL,25,1,'','t5','table'),
('C.t5','TMP-rtxtuyv','C(t5)','number',8.3,8.65,9,9.35,9.7,NULL,26,1,'','t5','table'),
('T.t5','TMP-rtxtuyv','T(t5)','number',8.3,8.65,9,9.35,9.7,NULL,27,1,'','t5','table'),

-- b1 (28-30)
('H.b1','TMP-rtxtuyv','H(b1)','number',13,13.5,14,14.5,15,NULL,28,1,'','b1','table'),
('C.b1','TMP-rtxtuyv','C(b1)','number',13,13.5,14,14.5,15,NULL,29,1,'','b1','table'),
('T.b1','TMP-rtxtuyv','T(b1)','number',13,13.5,14,14.5,15,NULL,30,1,'','b1','table'),

-- b3 (31-33)
('H.b3','TMP-rtxtuyv','H(b3)','number',13,13.5,14,14.5,15,NULL,31,1,'','b3','table'),
('C.b3','TMP-rtxtuyv','C(b3)','number',13,13.5,14,14.5,15,NULL,32,1,'','b3','table'),
('T.b3','TMP-rtxtuyv','T(b3)','number',13,13.5,14,14.5,15,NULL,33,1,'','b3','table'),

-- b2 (34-36)
('H.b2','TMP-rtxtuyv','H(b2)','number',13,13.5,14,14.5,15,NULL,34,1,'','b2','table'),
('C.b2','TMP-rtxtuyv','C(b2)','number',13,13.5,14,14.5,15,NULL,35,1,'','b2','table'),
('T.b2','TMP-rtxtuyv','T(b2)','number',13,13.5,14,14.5,15,NULL,36,1,'','b2','table'),

-- b4 (37-39)
('H.b4','TMP-rtxtuyv','H(b4)','number',13,13.5,14,14.5,15,NULL,37,1,'','b4','table'),
('C.b4','TMP-rtxtuyv','C(b4)','number',13,13.5,14,14.5,15,NULL,38,1,'','b4','table'),
('T.b4','TMP-rtxtuyv','T(b4)','number',13,13.5,14,14.5,15,NULL,39,1,'','b4','table'),

-- b1-b2/2 (40-42)
('H.b1-b2/2','TMP-rtxtuyv','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,40,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuyv','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,41,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuyv','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,42,1,'','b1-b2/2','table'),

-- b3-b4/2 (43-45)
('H.b3-b4/2','TMP-rtxtuyv','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,43,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuyv','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,44,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuyv','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,45,1,'','b3-b4/2','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuyv','Height of Flange','number',247,248.5,250,251.5,253,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuyv','Flange Thickness','number',13,13.5,14,14.5,15,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuyv','Width of Web','number',248,249,250,251,252,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuyv','Web Thickness','number',8.3,8.65,9,9.35,9.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuyv','Unit Weight (Kgm)','number',68.9,70.35,71.8,73.25,74.7,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuyv','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuyv','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtuyv','OS','number',0,0,2.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtuyv','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 't4', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 'b1', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 'b2', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 'b3', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 'b4', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Web Off Center', 'b1-b2/2', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyv', 'Web Off Center', 'b3-b4/2', 8);