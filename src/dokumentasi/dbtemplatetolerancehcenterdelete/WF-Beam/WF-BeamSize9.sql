-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfimwyah','WF-BEAM','WF 248X124X5X9','WF 248X124X5X9','248X124X5X9','WF-BEAM 248X124X5X9','WF 248X124X5X9','Template WF-BEAM 248X124X5X9','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfimwyah','H(H-top)','number',246,247,248,249,250,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfimwyah','C(H-top)','number',246,247,248,249,250,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfimwyah','T(H-top)','number',246,247,248,249,250,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfimwyah','H(H-bottom)','number',246,247,248,249,250,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfimwyah','C(H-bottom)','number',246,247,248,249,250,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfimwyah','T(H-bottom)','number',246,247,248,249,250,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfimwyah','H(B1)','number',121.5,122.75,124,125.25,126.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfimwyah','C(B1)','number',121.5,122.75,124,125.25,126.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfimwyah','T(B1)','number',121.5,122.75,124,125.25,126.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfimwyah','H(B2)','number',121.5,122.75,124,125.25,126.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfimwyah','C(B2)','number',121.5,122.75,124,125.25,126.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfimwyah','T(B2)','number',121.5,122.75,124,125.25,126.5,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfimwyah','H(t1)','number',7.5,8.25,9,9.75,10.5,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfimwyah','C(t1)','number',7.5,8.25,9,9.75,10.5,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfimwyah','T(t1)','number',7.5,8.25,9,9.75,10.5,NULL,15,1,'','t1','table'),

-- t2 (16-18) - Flange Thickness
('H.t2','TMP-wfimwyah','H(t2)','number',7.5,8.25,9,9.75,10.5,NULL,16,1,'','t2','table'),
('C.t2','TMP-wfimwyah','C(t2)','number',7.5,8.25,9,9.75,10.5,NULL,17,1,'','t2','table'),
('T.t2','TMP-wfimwyah','T(t2)','number',7.5,8.25,9,9.75,10.5,NULL,18,1,'','t2','table'),

-- t3 (19-21) - Flange Thickness
('H.t3','TMP-wfimwyah','H(t3)','number',7.5,8.25,9,9.75,10.5,NULL,19,1,'','t3','table'),
('C.t3','TMP-wfimwyah','C(t3)','number',7.5,8.25,9,9.75,10.5,NULL,20,1,'','t3','table'),
('T.t3','TMP-wfimwyah','T(t3)','number',7.5,8.25,9,9.75,10.5,NULL,21,1,'','t3','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfimwyah','H(t4)','number',7.5,8.25,9,9.75,10.5,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfimwyah','C(t4)','number',7.5,8.25,9,9.75,10.5,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfimwyah','T(t4)','number',7.5,8.25,9,9.75,10.5,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness
('H.t5','TMP-wfimwyah','H(t5)','number',4,4.65,5.3,5.95,6.6,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfimwyah','C(t5)','number',4,4.65,5.3,5.95,6.6,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfimwyah','T(t5)','number',4,4.65,5.3,5.95,6.6,NULL,27,1,'','t5','table'),

-- b1 (28-30) - Flange Thickness
('H.b1','TMP-wfimwyah','H(b1)','number',7.5,8.25,9,9.75,10.5,NULL,28,1,'','b1','table'),
('C.b1','TMP-wfimwyah','C(b1)','number',7.5,8.25,9,9.75,10.5,NULL,29,1,'','b1','table'),
('T.b1','TMP-wfimwyah','T(b1)','number',7.5,8.25,9,9.75,10.5,NULL,30,1,'','b1','table'),

-- b3 (31-33) - Flange Thickness
('H.b3','TMP-wfimwyah','H(b3)','number',7.5,8.25,9,9.75,10.5,NULL,31,1,'','b3','table'),
('C.b3','TMP-wfimwyah','C(b3)','number',7.5,8.25,9,9.75,10.5,NULL,32,1,'','b3','table'),
('T.b3','TMP-wfimwyah','T(b3)','number',7.5,8.25,9,9.75,10.5,NULL,33,1,'','b3','table'),

-- b2 (34-36) - Flange Thickness
('H.b2','TMP-wfimwyah','H(b2)','number',7.5,8.25,9,9.75,10.5,NULL,34,1,'','b2','table'),
('C.b2','TMP-wfimwyah','C(b2)','number',7.5,8.25,9,9.75,10.5,NULL,35,1,'','b2','table'),
('T.b2','TMP-wfimwyah','T(b2)','number',7.5,8.25,9,9.75,10.5,NULL,36,1,'','b2','table'),

-- b4 (37-39) - Flange Thickness
('H.b4','TMP-wfimwyah','H(b4)','number',7.5,8.25,9,9.75,10.5,NULL,37,1,'','b4','table'),
('C.b4','TMP-wfimwyah','C(b4)','number',7.5,8.25,9,9.75,10.5,NULL,38,1,'','b4','table'),
('T.b4','TMP-wfimwyah','T(b4)','number',7.5,8.25,9,9.75,10.5,NULL,39,1,'','b4','table'),

-- b1-b2/2 (40-42) - Web Off Center
('H.b1-b2/2','TMP-wfimwyah','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,40,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfimwyah','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,41,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfimwyah','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,42,1,'','b1-b2/2','table'),

-- b3-b4/2 (43-45) - Web Off Center
('H.b3-b4/2','TMP-wfimwyah','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,43,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfimwyah','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,44,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfimwyah','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,45,1,'','b3-b4/2','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfimwyah','Height of Flange','number',121.5,122.75,124,125.25,126.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfimwyah','Flange Thickness','number',7.5,8.25,9,9.75,10.5,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfimwyah','Width of Web','number',246,247,248,249,250,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfimwyah','Web Thickness','number',4,4.65,5.3,5.95,6.6,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfimwyah','Unit Weight (Kgm)','number',25.5,26.3,27.1,27.9,28.7,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfimwyah','Radius','number',0,0,8,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfimwyah','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfimwyah','OS','number',0,0,1.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfimwyah','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfimwyah', 'Unit Weight (Kgm)', '', 0);