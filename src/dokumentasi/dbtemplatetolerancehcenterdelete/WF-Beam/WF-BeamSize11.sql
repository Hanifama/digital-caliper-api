-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfkoaycj','WF-BEAM','WF 298X149X5.5X8','WF 298X149X5.5X8','298X149X5.5X8','WF-BEAM 298X149X5.5X8','WF 298X149X5.5X8','Template WF-BEAM 298X149X5.5X8','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfkoaycj','H(H-top)','number',296,297,298,299,300,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfkoaycj','C(H-top)','number',296,297,298,299,300,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfkoaycj','T(H-top)','number',296,297,298,299,300,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfkoaycj','H(H-bottom)','number',296,297,298,299,300,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfkoaycj','C(H-bottom)','number',296,297,298,299,300,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfkoaycj','T(H-bottom)','number',296,297,298,299,300,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfkoaycj','H(B1)','number',146.5,147.75,149,150.25,151.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfkoaycj','C(B1)','number',146.5,147.75,149,150.25,151.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfkoaycj','T(B1)','number',146.5,147.75,149,150.25,151.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfkoaycj','H(B2)','number',146.5,147.75,149,150.25,151.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfkoaycj','C(B2)','number',146.5,147.75,149,150.25,151.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfkoaycj','T(B2)','number',146.5,147.75,149,150.25,151.5,NULL,12,1,'','B2','table'),

-- b1 (13-15) - Flange Thickness 
('H.b1','TMP-wfkoaycj','H(b1)','number',6.5,7.25,8,8.75,9.5,NULL,13,1,'','b1','table'),
('C.b1','TMP-wfkoaycj','C(b1)','number',6.5,7.25,8,8.75,9.5,NULL,14,1,'','b1','table'),
('T.b1','TMP-wfkoaycj','T(b1)','number',6.5,7.25,8,8.75,9.5,NULL,15,1,'','b1','table'),

-- b3 (16-18) - Flange Thickness
('H.b3','TMP-wfkoaycj','H(b3)','number',6.5,7.25,8,8.75,9.5,NULL,16,1,'','b3','table'),
('C.b3','TMP-wfkoaycj','C(b3)','number',6.5,7.25,8,8.75,9.5,NULL,17,1,'','b3','table'),
('T.b3','TMP-wfkoaycj','T(b3)','number',6.5,7.25,8,8.75,9.5,NULL,18,1,'','b3','table'),

-- b2 (19-21) - Flange Thickness 
('H.b2','TMP-wfkoaycj','H(b2)','number',6.5,7.25,8,8.75,9.5,NULL,19,1,'','b2','table'),
('C.b2','TMP-wfkoaycj','C(b2)','number',6.5,7.25,8,8.75,9.5,NULL,20,1,'','b2','table'),
('T.b2','TMP-wfkoaycj','T(b2)','number',6.5,7.25,8,8.75,9.5,NULL,21,1,'','b2','table'),

-- b4 (22-24) - Flange Thickness 
('H.b4','TMP-wfkoaycj','H(b4)','number',6.5,7.25,8,8.75,9.5,NULL,22,1,'','b4','table'),
('C.b4','TMP-wfkoaycj','C(b4)','number',6.5,7.25,8,8.75,9.5,NULL,23,1,'','b4','table'),
('T.b4','TMP-wfkoaycj','T(b4)','number',6.5,7.25,8,8.75,9.5,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27) - Web Off Center 
('H.b1-b2/2','TMP-wfkoaycj','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfkoaycj','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfkoaycj','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web Off Center 
('H.b3-b4/2','TMP-wfkoaycj','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfkoaycj','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfkoaycj','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness 
('H.t1','TMP-wfkoaycj','H(t1)','number',6.5,7.25,8,8.75,9.5,NULL,31,1,'','t1','table'),
('C.t1','TMP-wfkoaycj','C(t1)','number',6.5,7.25,8,8.75,9.5,NULL,32,1,'','t1','table'),
('T.t1','TMP-wfkoaycj','T(t1)','number',6.5,7.25,8,8.75,9.5,NULL,33,1,'','t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfkoaycj','H(t3)','number',6.5,7.25,8,8.75,9.5,NULL,34,1,'','t3','table'),
('C.t3','TMP-wfkoaycj','C(t3)','number',6.5,7.25,8,8.75,9.5,NULL,35,1,'','t3','table'),
('T.t3','TMP-wfkoaycj','T(t3)','number',6.5,7.25,8,8.75,9.5,NULL,36,1,'','t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfkoaycj','H(t2)','number',6.5,7.25,8,8.75,9.5,NULL,37,1,'','t2','table'),
('C.t2','TMP-wfkoaycj','C(t2)','number',6.5,7.25,8,8.75,9.5,NULL,38,1,'','t2','table'),
('T.t2','TMP-wfkoaycj','T(t2)','number',6.5,7.25,8,8.75,9.5,NULL,39,1,'','t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfkoaycj','H(t4)','number',6.5,7.25,8,8.75,9.5,NULL,40,1,'','t4','table'),
('C.t4','TMP-wfkoaycj','C(t4)','number',6.5,7.25,8,8.75,9.5,NULL,41,1,'','t4','table'),
('T.t4','TMP-wfkoaycj','T(t4)','number',6.5,7.25,8,8.75,9.5,NULL,42,1,'','t4','table'),

-- t5 (43-45) - Web Thickness 
('H.t5','TMP-wfkoaycj','H(t5)','number',4.5,5.15,5.8,6.45,7.1,NULL,43,1,'','t5','table'),
('C.t5','TMP-wfkoaycj','C(t5)','number',4.5,5.15,5.8,6.45,7.1,NULL,44,1,'','t5','table'),
('T.t5','TMP-wfkoaycj','T(t5)','number',4.5,5.15,5.8,6.45,7.1,NULL,45,1,'','t5','table'),

-- t6 (NULL) - Web Thickness - dengan order_numb NULL
('H.t6','TMP-wfkoaycj','H(t6)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-wfkoaycj','C(t6)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-wfkoaycj','T(t6)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - Web Thickness - dengan order_numb NULL
('H.t7','TMP-wfkoaycj','H(t7)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-wfkoaycj','C(t7)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-wfkoaycj','T(t7)','number',4.5,5.15,5.8,6.45,7.1,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfkoaycj','Height of Flange','number',146.5,147.75,149,150.25,151.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfkoaycj','Flange Thickness','number',6.5,7.25,8,8.75,9.5,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfkoaycj','Width of Web','number',296,297,298,299,300,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfkoaycj','Web Thickness','number',4.5,5.15,5.8,6.45,7.1,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfkoaycj','Unit Weight (Kgm)','number',30.2,31.1,32,32.9,33.8,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfkoaycj','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfkoaycj','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfkoaycj','OS','number',0,0,1.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfkoaycj','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfkoaycj', 'Unit Weight (Kgm)', '', 0);