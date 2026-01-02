-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfeiswvd','WF-BEAM','WF 198X99X4.5X7','WF 198X99X4.5X7','198X99X4.5X7','WF-BEAM 198X99X4.5X7','WF 198X99X4.5X7','Template WF-BEAM 198X99X4.5X7','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfeiswvd','H(H-top)','number',196,197,198,199,200,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfeiswvd','C(H-top)','number',196,197,198,199,200,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfeiswvd','T(H-top)','number',196,197,198,199,200,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfeiswvd','H(H-bottom)','number',196,197,198,199,200,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfeiswvd','C(H-bottom)','number',196,197,198,199,200,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfeiswvd','T(H-bottom)','number',196,197,198,199,200,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfeiswvd','H(B1)','number',97,98,99,100,101,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfeiswvd','C(B1)','number',97,98,99,100,101,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfeiswvd','T(B1)','number',97,98,99,100,101,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfeiswvd','H(B2)','number',97,98,99,100,101,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfeiswvd','C(B2)','number',97,98,99,100,101,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfeiswvd','T(B2)','number',97,98,99,100,101,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfeiswvd','H(t1)','number',5.5,6.25,7,7.75,8.5,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfeiswvd','C(t1)','number',5.5,6.25,7,7.75,8.5,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfeiswvd','T(t1)','number',5.5,6.25,7,7.75,8.5,NULL,15,1,'','t1','table'),

-- t3 (16-18) - Flange Thickness
('H.t3','TMP-wfeiswvd','H(t3)','number',5.5,6.25,7,7.75,8.5,NULL,16,1,'','t3','table'),
('C.t3','TMP-wfeiswvd','C(t3)','number',5.5,6.25,7,7.75,8.5,NULL,17,1,'','t3','table'),
('T.t3','TMP-wfeiswvd','T(t3)','number',5.5,6.25,7,7.75,8.5,NULL,18,1,'','t3','table'),

-- t2 (19-21) - Flange Thickness
('H.t2','TMP-wfeiswvd','H(t2)','number',5.5,6.25,7,7.75,8.5,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfeiswvd','C(t2)','number',5.5,6.25,7,7.75,8.5,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfeiswvd','T(t2)','number',5.5,6.25,7,7.75,8.5,NULL,21,1,'','t2','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfeiswvd','H(t4)','number',5.5,6.25,7,7.75,8.5,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfeiswvd','C(t4)','number',5.5,6.25,7,7.75,8.5,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfeiswvd','T(t4)','number',5.5,6.25,7,7.75,8.5,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness
('H.t5','TMP-wfeiswvd','H(t5)','number',3.5,4.15,4.8,5.45,6.1,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfeiswvd','C(t5)','number',3.5,4.15,4.8,5.45,6.1,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfeiswvd','T(t5)','number',3.5,4.15,4.8,5.45,6.1,NULL,27,1,'','t5','table'),

-- t6 (28-30) - Web Thickness
('H.t6','TMP-wfeiswvd','H(t6)','number',3.5,4.15,4.8,5.45,6.1,NULL,28,1,'','t6','table'),
('C.t6','TMP-wfeiswvd','C(t6)','number',3.5,4.15,4.8,5.45,6.1,NULL,29,1,'','t6','table'),
('T.t6','TMP-wfeiswvd','T(t6)','number',3.5,4.15,4.8,5.45,6.1,NULL,30,1,'','t6','table'),

-- t7 (31-33) - Web Thickness
('H.t7','TMP-wfeiswvd','H(t7)','number',3.5,4.15,4.8,5.45,6.1,NULL,31,1,'','t7','table'),
('C.t7','TMP-wfeiswvd','C(t7)','number',3.5,4.15,4.8,5.45,6.1,NULL,32,1,'','t7','table'),
('T.t7','TMP-wfeiswvd','T(t7)','number',3.5,4.15,4.8,5.45,6.1,NULL,33,1,'','t7','table'),

-- b1 (34-36) - Flange Thickness
('H.b1','TMP-wfeiswvd','H(b1)','number',5.5,6.25,7,7.75,8.5,NULL,34,1,'','b1','table'),
('C.b1','TMP-wfeiswvd','C(b1)','number',5.5,6.25,7,7.75,8.5,NULL,35,1,'','b1','table'),
('T.b1','TMP-wfeiswvd','T(b1)','number',5.5,6.25,7,7.75,8.5,NULL,36,1,'','b1','table'),

-- b3 (37-39) - Flange Thickness
('H.b3','TMP-wfeiswvd','H(b3)','number',5.5,6.25,7,7.75,8.5,NULL,37,1,'','b3','table'),
('C.b3','TMP-wfeiswvd','C(b3)','number',5.5,6.25,7,7.75,8.5,NULL,38,1,'','b3','table'),
('T.b3','TMP-wfeiswvd','T(b3)','number',5.5,6.25,7,7.75,8.5,NULL,39,1,'','b3','table'),

-- b2 (40-42) - Flange Thickness
('H.b2','TMP-wfeiswvd','H(b2)','number',5.5,6.25,7,7.75,8.5,NULL,40,1,'','b2','table'),
('C.b2','TMP-wfeiswvd','C(b2)','number',5.5,6.25,7,7.75,8.5,NULL,41,1,'','b2','table'),
('T.b2','TMP-wfeiswvd','T(b2)','number',5.5,6.25,7,7.75,8.5,NULL,42,1,'','b2','table'),

-- b4 (43-45) - Flange Thickness
('H.b4','TMP-wfeiswvd','H(b4)','number',5.5,6.25,7,7.75,8.5,NULL,43,1,'','b4','table'),
('C.b4','TMP-wfeiswvd','C(b4)','number',5.5,6.25,7,7.75,8.5,NULL,44,1,'','b4','table'),
('T.b4','TMP-wfeiswvd','T(b4)','number',5.5,6.25,7,7.75,8.5,NULL,45,1,'','b4','table'),

-- b1-b2/2 (46-48) - Web Off Center
('H.b1-b2/2','TMP-wfeiswvd','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,46,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfeiswvd','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,47,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfeiswvd','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,48,1,'','b1-b2/2','table'),

-- b3-b4/2 (49-51) - Web Off Center
('H.b3-b4/2','TMP-wfeiswvd','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,49,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfeiswvd','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,50,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfeiswvd','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,51,1,'','b3-b4/2','table'),

-- FormRight (52-60)
('height.of.flange','TMP-wfeiswvd','Height of Flange','number',97,98,99,100,101,0,52,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfeiswvd','Flange Thickness','number',5.5,6.25,7,7.75,8.5,0,53,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfeiswvd','Width of Web','number',196,197,198,199,200,0,54,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfeiswvd','Web Thickness','number',3.5,4.15,4.8,5.45,6.1,0,55,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfeiswvd','Unit Weight (Kgm)','number',16.7,17.25,17.8,18.35,18.9,0,56,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfeiswvd','Radius','number',0,0,8,0,0,0,57,1,'','FormRight','Radius'),
('web.off.center','TMP-wfeiswvd','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,58,1,'','FormRight','Web Off Center'),
('os','TMP-wfeiswvd','OS','number',0,0,1.5,0,0,0,59,1,'','FormRight','OS'),
('cow','TMP-wfeiswvd','CoW','number',0,0,0,0,0,2,60,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)),'TMP-wfeiswvd', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfeiswvd', 'Unit Weight (Kgm)', '', 0);