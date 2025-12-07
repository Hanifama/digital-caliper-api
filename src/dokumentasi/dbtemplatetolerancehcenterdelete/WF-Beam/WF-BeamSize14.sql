-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfnddbef','WF-BEAM','WF 346X174X6X9','WF 346X174X6X9','346X174X6X9','WF-BEAM 346X174X6X9','WF 346X174X6X9','Template WF-BEAM 346X174X6X9','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfnddbef','H(H-top)','number',344,345,346,347,348,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfnddbef','C(H-top)','number',344,345,346,347,348,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfnddbef','T(H-top)','number',344,345,346,347,348,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfnddbef','H(H-bottom)','number',344,345,346,347,348,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfnddbef','C(H-bottom)','number',344,345,346,347,348,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfnddbef','T(H-bottom)','number',344,345,346,347,348,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfnddbef','H(B1)','number',171.5,172.75,174,175.25,176.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfnddbef','C(B1)','number',171.5,172.75,174,175.25,176.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfnddbef','T(B1)','number',171.5,172.75,174,175.25,176.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfnddbef','H(B2)','number',171.5,172.75,174,175.25,176.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfnddbef','C(B2)','number',171.5,172.75,174,175.25,176.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfnddbef','T(B2)','number',171.5,172.75,174,175.25,176.5,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness
('H.t1','TMP-wfnddbef','H(t1)','number',7.5,8.25,9,9.75,10.5,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfnddbef','C(t1)','number',7.5,8.25,9,9.75,10.5,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfnddbef','T(t1)','number',7.5,8.25,9,9.75,10.5,NULL,15,1,'','t1','table'),

-- t3 (16-18) - Flange Thickness
('H.t3','TMP-wfnddbef','H(t3)','number',7.5,8.25,9,9.75,10.5,NULL,16,1,'','t3','table'),
('C.t3','TMP-wfnddbef','C(t3)','number',7.5,8.25,9,9.75,10.5,NULL,17,1,'','t3','table'),
('T.t3','TMP-wfnddbef','T(t3)','number',7.5,8.25,9,9.75,10.5,NULL,18,1,'','t3','table'),

-- t2 (19-21) - Flange Thickness
('H.t2','TMP-wfnddbef','H(t2)','number',7.5,8.25,9,9.75,10.5,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfnddbef','C(t2)','number',7.5,8.25,9,9.75,10.5,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfnddbef','T(t2)','number',7.5,8.25,9,9.75,10.5,NULL,21,1,'','t2','table'),

-- t4 (22-24) - Flange Thickness
('H.t4','TMP-wfnddbef','H(t4)','number',7.5,8.25,9,9.75,10.5,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfnddbef','C(t4)','number',7.5,8.25,9,9.75,10.5,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfnddbef','T(t4)','number',7.5,8.25,9,9.75,10.5,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness
('H.t5','TMP-wfnddbef','H(t5)','number',5,5.65,6.3,6.95,7.6,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfnddbef','C(t5)','number',5,5.65,6.3,6.95,7.6,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfnddbef','T(t5)','number',5,5.65,6.3,6.95,7.6,NULL,27,1,'','t5','table'),

-- t6 (28-30) - Web Thickness
('H.t6','TMP-wfnddbef','H(t6)','number',5,5.65,6.3,6.95,7.6,NULL,28,1,'','t6','table'),
('C.t6','TMP-wfnddbef','C(t6)','number',5,5.65,6.3,6.95,7.6,NULL,29,1,'','t6','table'),
('T.t6','TMP-wfnddbef','T(t6)','number',5,5.65,6.3,6.95,7.6,NULL,30,1,'','t6','table'),

-- t7 (31-33) - Web Thickness
('H.t7','TMP-wfnddbef','H(t7)','number',5,5.65,6.3,6.95,7.6,NULL,31,1,'','t7','table'),
('C.t7','TMP-wfnddbef','C(t7)','number',5,5.65,6.3,6.95,7.6,NULL,32,1,'','t7','table'),
('T.t7','TMP-wfnddbef','T(t7)','number',5,5.65,6.3,6.95,7.6,NULL,33,1,'','t7','table'),

-- b1 (34-36) - Flange Thickness
('H.b1','TMP-wfnddbef','H(b1)','number',7.5,8.25,9,9.75,10.5,NULL,34,1,'','b1','table'),
('C.b1','TMP-wfnddbef','C(b1)','number',7.5,8.25,9,9.75,10.5,NULL,35,1,'','b1','table'),
('T.b1','TMP-wfnddbef','T(b1)','number',7.5,8.25,9,9.75,10.5,NULL,36,1,'','b1','table'),

-- b3 (37-39) - Flange Thickness
('H.b3','TMP-wfnddbef','H(b3)','number',7.5,8.25,9,9.75,10.5,NULL,37,1,'','b3','table'),
('C.b3','TMP-wfnddbef','C(b3)','number',7.5,8.25,9,9.75,10.5,NULL,38,1,'','b3','table'),
('T.b3','TMP-wfnddbef','T(b3)','number',7.5,8.25,9,9.75,10.5,NULL,39,1,'','b3','table'),

-- b2 (40-42) - Flange Thickness
('H.b2','TMP-wfnddbef','H(b2)','number',7.5,8.25,9,9.75,10.5,NULL,40,1,'','b2','table'),
('C.b2','TMP-wfnddbef','C(b2)','number',7.5,8.25,9,9.75,10.5,NULL,41,1,'','b2','table'),
('T.b2','TMP-wfnddbef','T(b2)','number',7.5,8.25,9,9.75,10.5,NULL,42,1,'','b2','table'),

-- b4 (43-45) - Flange Thickness
('H.b4','TMP-wfnddbef','H(b4)','number',7.5,8.25,9,9.75,10.5,NULL,43,1,'','b4','table'),
('C.b4','TMP-wfnddbef','C(b4)','number',7.5,8.25,9,9.75,10.5,NULL,44,1,'','b4','table'),
('T.b4','TMP-wfnddbef','T(b4)','number',7.5,8.25,9,9.75,10.5,NULL,45,1,'','b4','table'),

-- b1-b2/2 (46-48) - Web Off Center
('H.b1-b2/2','TMP-wfnddbef','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,46,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfnddbef','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,47,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfnddbef','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,48,1,'','b1-b2/2','table'),

-- b3-b4/2 (49-51) - Web Off Center
('H.b3-b4/2','TMP-wfnddbef','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,49,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfnddbef','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,50,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfnddbef','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,51,1,'','b3-b4/2','table'),

-- FormRight (52-60)
('height.of.flange','TMP-wfnddbef','Height of Flange','number',171.5,172.75,174,175.25,176.5,0,52,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfnddbef','Flange Thickness','number',7.5,8.25,9,9.75,10.5,0,53,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfnddbef','Width of Web','number',344,345,346,347,348,0,54,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfnddbef','Web Thickness','number',5,5.65,6.3,6.95,7.6,0,55,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfnddbef','Unit Weight (Kgm)','number',38.9,40.05,41.2,42.35,43.5,0,56,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfnddbef','Radius','number',0,0,13,0,0,0,57,1,'','FormRight','Radius'),
('web.off.center','TMP-wfnddbef','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,1,'','FormRight','Web Off Center'),
('os','TMP-wfnddbef','OS','number',0,0,2.09,0,0,0,59,1,'','FormRight','OS'),
('cow','TMP-wfnddbef','CoW','number',0,0,0,0,0,2,60,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfnddbef', 'Unit Weight (Kgm)', '', 0);