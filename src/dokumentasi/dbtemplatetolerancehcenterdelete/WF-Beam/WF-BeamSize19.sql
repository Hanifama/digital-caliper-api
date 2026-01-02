-- Template wf-beam WF 450X200X9X14
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfsiifvk','WF-BEAM','WF 450X200X9X14','WF 450X200X9X14','450X200X9X14','WF-BEAM 450X200X9X14','WF 450X200X9X14','Template WF-BEAM 450X200X9X14','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfsiifvk','H(H-top)','number',447,448.5,450,451.5,453,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfsiifvk','C(H-top)','number',447,448.5,450,451.5,453,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfsiifvk','T(H-top)','number',447,448.5,450,451.5,453,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfsiifvk','H(H-bottom)','number',447,448.5,450,451.5,453,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfsiifvk','C(H-bottom)','number',447,448.5,450,451.5,453,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfsiifvk','T(H-bottom)','number',447,448.5,450,451.5,453,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfsiifvk','H(B1)','number',197,198.5,200,201.5,203,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfsiifvk','C(B1)','number',197,198.5,200,201.5,203,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfsiifvk','T(B1)','number',197,198.5,200,201.5,203,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfsiifvk','H(B2)','number',197,198.5,200,201.5,203,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfsiifvk','C(B2)','number',197,198.5,200,201.5,203,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfsiifvk','T(B2)','number',197,198.5,200,201.5,203,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfsiifvk','H(t1)','number',13,13.5,14,14.5,15,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfsiifvk','C(t1)','number',13,13.5,14,14.5,15,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfsiifvk','T(t1)','number',13,13.5,14,14.5,15,NULL,15,1,'','t1','table'),

-- t3 (16-18) - Flange Thickness
('H.t3','TMP-wfsiifvk','H(t3)','number',13,13.5,14,14.5,15,NULL,16,1,'','t3','table'),
('C.t3','TMP-wfsiifvk','C(t3)','number',13,13.5,14,14.5,15,NULL,17,1,'','t3','table'),
('T.t3','TMP-wfsiifvk','T(t3)','number',13,13.5,14,14.5,15,NULL,18,1,'','t3','table'),

-- t2 (19-21) - Flange Thickness
('H.t2','TMP-wfsiifvk','H(t2)','number',13,13.5,14,14.5,15,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfsiifvk','C(t2)','number',13,13.5,14,14.5,15,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfsiifvk','T(t2)','number',13,13.5,14,14.5,15,NULL,21,1,'','t2','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfsiifvk','H(t4)','number',13,13.5,14,14.5,15,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfsiifvk','C(t4)','number',13,13.5,14,14.5,15,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfsiifvk','T(t4)','number',13,13.5,14,14.5,15,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness (Tebal Web)
('H.t5','TMP-wfsiifvk','H(t5)','number',8.3,8.65,9,9.35,9.7,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfsiifvk','C(t5)','number',8.3,8.65,9,9.35,9.7,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfsiifvk','T(t5)','number',8.3,8.65,9,9.35,9.7,NULL,27,1,'','t5','table'),

-- t6 (28-30) - Web Thickness (Tebal Web)
('H.t6','TMP-wfsiifvk','H(t6)','number',8.3,8.65,9,9.35,9.7,NULL,28,1,'','t6','table'),
('C.t6','TMP-wfsiifvk','C(t6)','number',8.3,8.65,9,9.35,9.7,NULL,29,1,'','t6','table'),
('T.t6','TMP-wfsiifvk','T(t6)','number',8.3,8.65,9,9.35,9.7,NULL,30,1,'','t6','table'),

-- t7 (31-33) - Web Thickness (Tebal Web)
('H.t7','TMP-wfsiifvk','H(t7)','number',8.3,8.65,9,9.35,9.7,NULL,31,1,'','t7','table'),
('C.t7','TMP-wfsiifvk','C(t7)','number',8.3,8.65,9,9.35,9.7,NULL,32,1,'','t7','table'),
('T.t7','TMP-wfsiifvk','T(t7)','number',8.3,8.65,9,9.35,9.7,NULL,33,1,'','t7','table'),

-- b1 (34-36) - Flange Thickness (Tebal Kaki)
('H.b1','TMP-wfsiifvk','H(b1)','number',13,13.5,14,14.5,15,NULL,34,1,'','b1','table'),
('C.b1','TMP-wfsiifvk','C(b1)','number',13,13.5,14,14.5,15,NULL,35,1,'','b1','table'),
('T.b1','TMP-wfsiifvk','T(b1)','number',13,13.5,14,14.5,15,NULL,36,1,'','b1','table'),

-- b3 (37-39) - Flange Thickness (Tebal Kaki)
('H.b3','TMP-wfsiifvk','H(b3)','number',13,13.5,14,14.5,15,NULL,37,1,'','b3','table'),
('C.b3','TMP-wfsiifvk','C(b3)','number',13,13.5,14,14.5,15,NULL,38,1,'','b3','table'),
('T.b3','TMP-wfsiifvk','T(b3)','number',13,13.5,14,14.5,15,NULL,39,1,'','b3','table'),

-- b2 (40-42) - Flange Thickness (Tebal Kaki)
('H.b2','TMP-wfsiifvk','H(b2)','number',13,13.5,14,14.5,15,NULL,40,1,'','b2','table'),
('C.b2','TMP-wfsiifvk','C(b2)','number',13,13.5,14,14.5,15,NULL,41,1,'','b2','table'),
('T.b2','TMP-wfsiifvk','T(b2)','number',13,13.5,14,14.5,15,NULL,42,1,'','b2','table'),

-- b4 (43-45) - Flange Thickness (Tebal Kaki)
('H.b4','TMP-wfsiifvk','H(b4)','number',13,13.5,14,14.5,15,NULL,43,1,'','b4','table'),
('C.b4','TMP-wfsiifvk','C(b4)','number',13,13.5,14,14.5,15,NULL,44,1,'','b4','table'),
('T.b4','TMP-wfsiifvk','T(b4)','number',13,13.5,14,14.5,15,NULL,45,1,'','b4','table'),

-- b1-b2/2 (46-48) - Web Off Center (WOC)
('H.b1-b2/2','TMP-wfsiifvk','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,46,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfsiifvk','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,47,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfsiifvk','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,48,1,'','b1-b2/2','table'),

-- b3-b4/2 (49-51) - Web Off Center (WOC)
('H.b3-b4/2','TMP-wfsiifvk','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,49,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfsiifvk','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,50,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfsiifvk','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,51,1,'','b3-b4/2','table'),

-- FormRight (52-60)
('height.of.flange','TMP-wfsiifvk','Height of Flange','number',197,198.5,200,201.5,203,0,52,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfsiifvk','Flange Thickness','number',13,13.5,14,14.5,15,0,53,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfsiifvk','Width of Web','number',447,448.5,450,451.5,453,0,54,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfsiifvk','Web Thickness','number',8.3,8.65,9,9.35,9.7,0,55,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfsiifvk','Unit Weight (Kgm)','number',71.9,73.4,74.9,76.4,77.9,0,56,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfsiifvk','Radius','number',0,0,13,0,0,0,57,1,'','FormRight','Radius'),
('web.off.center','TMP-wfsiifvk','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,1,'','FormRight','Web Off Center'),
('os','TMP-wfsiifvk','OS','number',0,0,2.4,0,0,0,59,1,'','FormRight','OS'),
('cow','TMP-wfsiifvk','CoW','number',0,0,0,0,0,2.5,60,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfsiifvk', 'Unit Weight (Kgm)', '', 0);