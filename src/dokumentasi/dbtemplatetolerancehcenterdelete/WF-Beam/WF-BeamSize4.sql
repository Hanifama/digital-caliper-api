-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfdhrsvc','WF-BEAM','WF 148X100X6X9','WF 148X100X6X9','148X100X6X9','WF-BEAM 148X100X6X9','WF 148X100X6X9','Template WF-BEAM 148X100X6X9','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfdhrsvc','H(H-top)','number',146,147,148,149,150,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfdhrsvc','C(H-top)','number',146,147,148,149,150,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfdhrsvc','T(H-top)','number',146,147,148,149,150,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfdhrsvc','H(H-bottom)','number',146,147,148,149,150,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfdhrsvc','C(H-bottom)','number',146,147,148,149,150,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfdhrsvc','T(H-bottom)','number',146,147,148,149,150,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfdhrsvc','H(B1)','number',97.5,98.75,100,101.25,102.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfdhrsvc','C(B1)','number',97.5,98.75,100,101.25,102.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfdhrsvc','T(B1)','number',97.5,98.75,100,101.25,102.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfdhrsvc','H(B2)','number',97.5,98.75,100,101.25,102.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfdhrsvc','C(B2)','number',97.5,98.75,100,101.25,102.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfdhrsvc','T(B2)','number',97.5,98.75,100,101.25,102.5,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfdhrsvc','H(t1)','number',7.5,8.25,9,9.75,10.5,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfdhrsvc','C(t1)','number',7.5,8.25,9,9.75,10.5,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfdhrsvc','T(t1)','number',7.5,8.25,9,9.75,10.5,NULL,15,1,'','t1','table'),

-- t2 (16-18) - Flange Thickness
('H.t2','TMP-wfdhrsvc','H(t2)','number',7.5,8.25,9,9.75,10.5,NULL,16,1,'','t2','table'),
('C.t2','TMP-wfdhrsvc','C(t2)','number',7.5,8.25,9,9.75,10.5,NULL,17,1,'','t2','table'),
('T.t2','TMP-wfdhrsvc','T(t2)','number',7.5,8.25,9,9.75,10.5,NULL,18,1,'','t2','table'),

-- t3 (19-21) - Flange Thickness
('H.t3','TMP-wfdhrsvc','H(t3)','number',7.5,8.25,9,9.75,10.5,NULL,19,1,'','t3','table'),
('C.t3','TMP-wfdhrsvc','C(t3)','number',7.5,8.25,9,9.75,10.5,NULL,20,1,'','t3','table'),
('T.t3','TMP-wfdhrsvc','T(t3)','number',7.5,8.25,9,9.75,10.5,NULL,21,1,'','t3','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfdhrsvc','H(t4)','number',7.5,8.25,9,9.75,10.5,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfdhrsvc','C(t4)','number',7.5,8.25,9,9.75,10.5,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfdhrsvc','T(t4)','number',7.5,8.25,9,9.75,10.5,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness
('H.t5','TMP-wfdhrsvc','H(t5)','number',5,5.65,6.3,6.95,7.6,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfdhrsvc','C(t5)','number',5,5.65,6.3,6.95,7.6,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfdhrsvc','T(t5)','number',5,5.65,6.3,6.95,7.6,NULL,27,1,'','t5','table'),

-- b1 (28-30) - Flange Thickness
('H.b1','TMP-wfdhrsvc','H(b1)','number',7.5,8.25,9,9.75,10.5,NULL,28,1,'','b1','table'),
('C.b1','TMP-wfdhrsvc','C(b1)','number',7.5,8.25,9,9.75,10.5,NULL,29,1,'','b1','table'),
('T.b1','TMP-wfdhrsvc','T(b1)','number',7.5,8.25,9,9.75,10.5,NULL,30,1,'','b1','table'),

-- b3 (31-33) - Flange Thickness
('H.b3','TMP-wfdhrsvc','H(b3)','number',7.5,8.25,9,9.75,10.5,NULL,31,1,'','b3','table'),
('C.b3','TMP-wfdhrsvc','C(b3)','number',7.5,8.25,9,9.75,10.5,NULL,32,1,'','b3','table'),
('T.b3','TMP-wfdhrsvc','T(b3)','number',7.5,8.25,9,9.75,10.5,NULL,33,1,'','b3','table'),

-- b2 (34-36) - Flange Thickness
('H.b2','TMP-wfdhrsvc','H(b2)','number',7.5,8.25,9,9.75,10.5,NULL,34,1,'','b2','table'),
('C.b2','TMP-wfdhrsvc','C(b2)','number',7.5,8.25,9,9.75,10.5,NULL,35,1,'','b2','table'),
('T.b2','TMP-wfdhrsvc','T(b2)','number',7.5,8.25,9,9.75,10.5,NULL,36,1,'','b2','table'),

-- b4 (37-39) - Flange Thickness
('H.b4','TMP-wfdhrsvc','H(b4)','number',7.5,8.25,9,9.75,10.5,NULL,37,1,'','b4','table'),
('C.b4','TMP-wfdhrsvc','C(b4)','number',7.5,8.25,9,9.75,10.5,NULL,38,1,'','b4','table'),
('T.b4','TMP-wfdhrsvc','T(b4)','number',7.5,8.25,9,9.75,10.5,NULL,39,1,'','b4','table'),

-- b1-b2/2 (40-42) - Web Off Center
('H.b1-b2/2','TMP-wfdhrsvc','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,40,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfdhrsvc','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,41,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfdhrsvc','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,42,1,'','b1-b2/2','table'),

-- b3-b4/2 (43-45) - Web Off Center
('H.b3-b4/2','TMP-wfdhrsvc','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,43,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfdhrsvc','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,44,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfdhrsvc','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,45,1,'','b3-b4/2','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfdhrsvc','Height of Flange','number',97.5,98.75,100,101.25,102.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfdhrsvc','Flange Thickness','number',7.5,8.25,9,9.75,10.5,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfdhrsvc','Width of Web','number',146,147,148,149,150,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfdhrsvc','Web Thickness','number',5,5.65,6.3,6.95,7.6,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfdhrsvc','Unit Weight (Kgm)','number',19.5,20.1,20.7,21.3,21.9,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfdhrsvc','Radius','number',0,0,8,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfdhrsvc','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfdhrsvc','OS','number',0,0,1.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfdhrsvc','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfdhrsvc', 'Unit Weight (Kgm)', '', 0);