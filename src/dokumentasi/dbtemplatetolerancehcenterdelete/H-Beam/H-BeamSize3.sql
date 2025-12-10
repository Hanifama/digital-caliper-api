-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtryr', 'H-BEAM', 'HB 150X150X7X10', 'HB 150X150X7X10', '150X150X7X10', 'H-BEAM 150X150X7X10', 'HB 150X150X7X10', 'Template HB 150X150X7X10', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtryr','H(H-top)','number',148,149,150,151,152,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtryr','C(H-top)','number',148,149,150,151,152,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtryr','T(H-top)','number',148,149,150,151,152,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) 
('H.H-bottom','TMP-rtxtryr','H(H-bottom)','number',148,149,150,151,152,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtryr','C(H-bottom)','number',148,149,150,151,152,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtryr','T(H-bottom)','number',148,149,150,151,152,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) 
('H.B1','TMP-rtxtryr','H(B1)','number',147.5,148.75,150,151.25,152.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtryr','C(B1)','number',147.5,148.75,150,151.25,152.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtryr','T(B1)','number',147.5,148.75,150,151.25,152.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) 
('H.B2','TMP-rtxtryr','H(B2)','number',147.5,148.75,150,151.25,152.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtryr','C(B2)','number',147.5,148.75,150,151.25,152.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtryr','T(B2)','number',147.5,148.75,150,151.25,152.5,NULL,12,1,'','B2','table'),

-- b1 (13-15) 
('H.b1','TMP-rtxtryr','H(b1)','number',9,9.5,10,10.5,11,NULL,13,1,'','b1','table'),
('C.b1','TMP-rtxtryr','C(b1)','number',9,9.5,10,10.5,11,NULL,14,1,'','b1','table'),
('T.b1','TMP-rtxtryr','T(b1)','number',9,9.5,10,10.5,11,NULL,15,1,'','b1','table'),

-- b3 (16-18)
('H.b3','TMP-rtxtryr','H(b3)','number',9,9.5,10,10.5,11,NULL,16,1,'','b3','table'),
('C.b3','TMP-rtxtryr','C(b3)','number',9,9.5,10,10.5,11,NULL,17,1,'','b3','table'),
('T.b3','TMP-rtxtryr','T(b3)','number',9,9.5,10,10.5,11,NULL,18,1,'','b3','table'),

-- b2 (19-21) 
('H.b2','TMP-rtxtryr','H(b2)','number',9,9.5,10,10.5,11,NULL,19,1,'','b2','table'),
('C.b2','TMP-rtxtryr','C(b2)','number',9,9.5,10,10.5,11,NULL,20,1,'','b2','table'),
('T.b2','TMP-rtxtryr','T(b2)','number',9,9.5,10,10.5,11,NULL,21,1,'','b2','table'),

-- b4 (22-24) 
('H.b4','TMP-rtxtryr','H(b4)','number',9,9.5,10,10.5,11,NULL,22,1,'','b4','table'),
('C.b4','TMP-rtxtryr','C(b4)','number',9,9.5,10,10.5,11,NULL,23,1,'','b4','table'),
('T.b4','TMP-rtxtryr','T(b4)','number',9,9.5,10,10.5,11,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27) 
('H.b1-b2/2','TMP-rtxtryr','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtryr','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtryr','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) 
('H.b3-b4/2','TMP-rtxtryr','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtryr','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtryr','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33) 
('H.t1','TMP-rtxtryr','H(t1)','number',9,9.5,10,10.5,11,NULL,31,1,'','t1','table'),
('C.t1','TMP-rtxtryr','C(t1)','number',9,9.5,10,10.5,11,NULL,32,1,'','t1','table'),
('T.t1','TMP-rtxtryr','T(t1)','number',9,9.5,10,10.5,11,NULL,33,1,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtryr','H(t3)','number',9,9.5,10,10.5,11,NULL,34,1,'','t3','table'),
('C.t3','TMP-rtxtryr','C(t3)','number',9,9.5,10,10.5,11,NULL,35,1,'','t3','table'),
('T.t3','TMP-rtxtryr','T(t3)','number',9,9.5,10,10.5,11,NULL,36,1,'','t3','table'),

-- t2 (37-39) 
('H.t2','TMP-rtxtryr','H(t2)','number',9,9.5,10,10.5,11,NULL,37,1,'','t2','table'),
('C.t2','TMP-rtxtryr','C(t2)','number',9,9.5,10,10.5,11,NULL,38,1,'','t2','table'),
('T.t2','TMP-rtxtryr','T(t2)','number',9,9.5,10,10.5,11,NULL,39,1,'','t2','table'),

-- t4 (40-42) 
('H.t4','TMP-rtxtryr','H(t4)','number',9,9.5,10,10.5,11,NULL,40,1,'','t4','table'),
('C.t4','TMP-rtxtryr','C(t4)','number',9,9.5,10,10.5,11,NULL,41,1,'','t4','table'),
('T.t4','TMP-rtxtryr','T(t4)','number',9,9.5,10,10.5,11,NULL,42,1,'','t4','table'),

-- t5 (43-45) 
('H.t5','TMP-rtxtryr','H(t5)','number',6.3,6.65,7,7.35,7.7,NULL,43,1,'','t5','table'),
('C.t5','TMP-rtxtryr','C(t5)','number',6.3,6.65,7,7.35,7.7,NULL,44,1,'','t5','table'),
('T.t5','TMP-rtxtryr','T(t5)','number',6.3,6.65,7,7.35,7.7,NULL,45,1,'','t5','table'),

-- t6 (NULL) - tanpa order_numb
('H.t6','TMP-rtxtryr','H(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-rtxtryr','C(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-rtxtryr','T(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - tanpa order_numb
('H.t7','TMP-rtxtryr','H(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-rtxtryr','C(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-rtxtryr','T(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54) 
('height.of.flange','TMP-rtxtryr','Height of Flange','number',147.5,148.75,150,151.25,152.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtryr','Flange Thickness','number',9,9.5,10,10.5,11,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtryr','Width of Web','number',148,149,150,151,152,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtryr','Web Thickness','number',6.3,6.65,7,7.35,7.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtryr','Unit Weight (Kgm)','number',29.9,30.5,31.1,31.7,32.3,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtryr','Radius','number',0,0,8,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtryr','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtryr','OS','number',0,0,1.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtryr','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 't4', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 'b1', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 'b2', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 'b3', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 'b4', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Web Off Center', 'b1-b2/2', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtryr', 'Web Off Center', 'b3-b4/2', 8);