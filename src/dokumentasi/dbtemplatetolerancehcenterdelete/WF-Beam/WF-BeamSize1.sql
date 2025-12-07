-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfagxqpk','WF-BEAM','WF 100X50X5X7','WF 100X50X5X7','100X50X5X7','WF-BEAM 100X50X5X7','WF 100X50X5X7','Template WF-BEAM 100X50X5X7','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfagxqpk','H(H-top)','number',98,99,100,101,102,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfagxqpk','C(H-top)','number',98,99,100,101,102,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfagxqpk','T(H-top)','number',98,99,100,101,102,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfagxqpk','H(H-bottom)','number',98,99,100,101,102,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfagxqpk','C(H-bottom)','number',98,99,100,101,102,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfagxqpk','T(H-bottom)','number',98,99,100,101,102,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfagxqpk','H(B1)','number',48,49,50,51,52,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfagxqpk','C(B1)','number',48,49,50,51,52,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfagxqpk','T(B1)','number',48,49,50,51,52,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfagxqpk','H(B2)','number',48,49,50,51,52,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfagxqpk','C(B2)','number',48,49,50,51,52,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfagxqpk','T(B2)','number',48,49,50,51,52,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfagxqpk','H(t1)','number',5.5,6.25,7,7.75,8.5,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfagxqpk','C(t1)','number',5.5,6.25,7,7.75,8.5,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfagxqpk','T(t1)','number',5.5,6.25,7,7.75,8.5,NULL,15,1,'','t1','table'),

-- t3 (16-18) - Flange Thickness
('H.t3','TMP-wfagxqpk','H(t3)','number',5.5,6.25,7,7.75,8.5,NULL,16,1,'','t3','table'),
('C.t3','TMP-wfagxqpk','C(t3)','number',5.5,6.25,7,7.75,8.5,NULL,17,1,'','t3','table'),
('T.t3','TMP-wfagxqpk','T(t3)','number',5.5,6.25,7,7.75,8.5,NULL,18,1,'','t3','table'),

-- t2 (19-21) - Flange Thickness
('H.t2','TMP-wfagxqpk','H(t2)','number',5.5,6.25,7,7.75,8.5,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfagxqpk','C(t2)','number',5.5,6.25,7,7.75,8.5,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfagxqpk','T(t2)','number',5.5,6.25,7,7.75,8.5,NULL,21,1,'','t2','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfagxqpk','H(t4)','number',5.5,6.25,7,7.75,8.5,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfagxqpk','C(t4)','number',5.5,6.25,7,7.75,8.5,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfagxqpk','T(t4)','number',5.5,6.25,7,7.75,8.5,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness
('H.t5','TMP-wfagxqpk','H(t5)','number',4,4.65,5.3,5.95,6.6,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfagxqpk','C(t5)','number',4,4.65,5.3,5.95,6.6,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfagxqpk','T(t5)','number',4,4.65,5.3,5.95,6.6,NULL,27,1,'','t5','table'),

-- t6 (28-30) - Web Thickness
('H.t6','TMP-wfagxqpk','H(t6)','number',4,4.65,5.3,5.95,6.6,NULL,28,1,'','t6','table'),
('C.t6','TMP-wfagxqpk','C(t6)','number',4,4.65,5.3,5.95,6.6,NULL,29,1,'','t6','table'),
('T.t6','TMP-wfagxqpk','T(t6)','number',4,4.65,5.3,5.95,6.6,NULL,30,1,'','t6','table'),

-- t7 (31-33) - Web Thickness
('H.t7','TMP-wfagxqpk','H(t7)','number',4,4.65,5.3,5.95,6.6,NULL,31,1,'','t7','table'),
('C.t7','TMP-wfagxqpk','C(t7)','number',4,4.65,5.3,5.95,6.6,NULL,32,1,'','t7','table'),
('T.t7','TMP-wfagxqpk','T(t7)','number',4,4.65,5.3,5.95,6.6,NULL,33,1,'','t7','table'),

-- b1 (34-36) - Flange Thickness 
('H.b1','TMP-wfagxqpk','H(b1)','number',5.5,6.25,7,7.75,8.5,NULL,34,1,'','b1','table'),
('C.b1','TMP-wfagxqpk','C(b1)','number',5.5,6.25,7,7.75,8.5,NULL,35,1,'','b1','table'),
('T.b1','TMP-wfagxqpk','T(b1)','number',5.5,6.25,7,7.75,8.5,NULL,36,1,'','b1','table'),

-- b3 (37-39) - Flange Thickness 
('H.b3','TMP-wfagxqpk','H(b3)','number',5.5,6.25,7,7.75,8.5,NULL,37,1,'','b3','table'),
('C.b3','TMP-wfagxqpk','C(b3)','number',5.5,6.25,7,7.75,8.5,NULL,38,1,'','b3','table'),
('T.b3','TMP-wfagxqpk','T(b3)','number',5.5,6.25,7,7.75,8.5,NULL,39,1,'','b3','table'),

-- b2 (40-42) - Flange Thickness 
('H.b2','TMP-wfagxqpk','H(b2)','number',5.5,6.25,7,7.75,8.5,NULL,40,1,'','b2','table'),
('C.b2','TMP-wfagxqpk','C(b2)','number',5.5,6.25,7,7.75,8.5,NULL,41,1,'','b2','table'),
('T.b2','TMP-wfagxqpk','T(b2)','number',5.5,6.25,7,7.75,8.5,NULL,42,1,'','b2','table'),

-- b4 (43-45) - Flange Thickness 
('H.b4','TMP-wfagxqpk','H(b4)','number',5.5,6.25,7,7.75,8.5,NULL,43,1,'','b4','table'),
('C.b4','TMP-wfagxqpk','C(b4)','number',5.5,6.25,7,7.75,8.5,NULL,44,1,'','b4','table'),
('T.b4','TMP-wfagxqpk','T(b4)','number',5.5,6.25,7,7.75,8.5,NULL,45,1,'','b4','table'),

-- b1-b2/2 (46-48) - Web Off Center 
('H.b1-b2/2','TMP-wfagxqpk','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,46,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfagxqpk','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,47,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfagxqpk','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,48,1,'','b1-b2/2','table'),

-- b3-b4/2 (49-51) - Web Off Center 
('H.b3-b4/2','TMP-wfagxqpk','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,49,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfagxqpk','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,50,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfagxqpk','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,51,1,'','b3-b4/2','table'),

-- FormRight (52-60) 
('height.of.flange','TMP-wfagxqpk','Height of Flange','number',48,49,50,51,52,0,52,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfagxqpk','Flange Thickness','number',5.5,6.25,7,7.75,8.5,0,53,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfagxqpk','Width of Web','number',98,99,100,101,102,0,54,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfagxqpk','Web Thickness','number',4,4.65,5.3,5.95,6.6,0,55,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfagxqpk','Unit Weight (Kgm)','number',8.6,9.05,9.5,9.95,10.4,0,56,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfagxqpk','Radius','number',0,0,8,0,0,0,57,1,'','FormRight','Radius'),
('web.off.center','TMP-wfagxqpk','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,58,1,'','FormRight','Web Off Center'),
('os','TMP-wfagxqpk','OS','number',0,0,1.5,0,0,0,59,1,'','FormRight','OS'),
('cow','TMP-wfagxqpk','CoW','number',0,0,0,0,0,2,60,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)),'TMP-wfagxqpk', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfagxqpk', 'Unit Weight (Kgm)', '', 0);