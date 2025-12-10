-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuzg', 'H-BEAM', 'HB 414X405X18X28', 'HB 414X405X18X28', '414X405X18X28', 'H-BEAM 414X405X18X28', 'HB 414X405X18X28', 'Template HB 414X405X18X28', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuzg','H(H-top)','number',411,412.5,414,415.5,417,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuzg','C(H-top)','number',411,412.5,414,415.5,417,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuzg','T(H-top)','number',411,412.5,414,415.5,417,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuzg','H(H-bottom)','number',411,412.5,414,415.5,417,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzg','C(H-bottom)','number',411,412.5,414,415.5,417,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzg','T(H-bottom)','number',411,412.5,414,415.5,417,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuzg','H(B1)','number',402,403.5,405,406.5,408,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtuzg','C(B1)','number',402,403.5,405,406.5,408,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtuzg','T(B1)','number',402,403.5,405,406.5,408,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuzg','H(B2)','number',402,403.5,405,406.5,408,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtuzg','C(B2)','number',402,403.5,405,406.5,408,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtuzg','T(B2)','number',402,403.5,405,406.5,408,NULL,12,1,'','B2','table'),

-- b1 (13-15)
('H.b1','TMP-rtxtuzg','H(b1)','number',26.3,27.15,28,28.85,29.7,NULL,13,1,'','b1','table'),
('C.b1','TMP-rtxtuzg','C(b1)','number',26.3,27.15,28,28.85,29.7,NULL,14,1,'','b1','table'),
('T.b1','TMP-rtxtuzg','T(b1)','number',26.3,27.15,28,28.85,29.7,NULL,15,1,'','b1','table'),

-- b3 (16-18)
('H.b3','TMP-rtxtuzg','H(b3)','number',26.3,27.15,28,28.85,29.7,NULL,16,1,'','b3','table'),
('C.b3','TMP-rtxtuzg','C(b3)','number',26.3,27.15,28,28.85,29.7,NULL,17,1,'','b3','table'),
('T.b3','TMP-rtxtuzg','T(b3)','number',26.3,27.15,28,28.85,29.7,NULL,18,1,'','b3','table'),

-- b2 (19-21)
('H.b2','TMP-rtxtuzg','H(b2)','number',26.3,27.15,28,28.85,29.7,NULL,19,1,'','b2','table'),
('C.b2','TMP-rtxtuzg','C(b2)','number',26.3,27.15,28,28.85,29.7,NULL,20,1,'','b2','table'),
('T.b2','TMP-rtxtuzg','T(b2)','number',26.3,27.15,28,28.85,29.7,NULL,21,1,'','b2','table'),

-- b4 (22-24)
('H.b4','TMP-rtxtuzg','H(b4)','number',26.3,27.15,28,28.85,29.7,NULL,22,1,'','b4','table'),
('C.b4','TMP-rtxtuzg','C(b4)','number',26.3,27.15,28,28.85,29.7,NULL,23,1,'','b4','table'),
('T.b4','TMP-rtxtuzg','T(b4)','number',26.3,27.15,28,28.85,29.7,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27) 
('H.b1-b2/2','TMP-rtxtuzg','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzg','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzg','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-rtxtuzg','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzg','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzg','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33) 
('H.t1','TMP-rtxtuzg','H(t1)','number',26.3,27.15,28,28.85,29.7,NULL,31,1,'','t1','table'),
('C.t1','TMP-rtxtuzg','C(t1)','number',26.3,27.15,28,28.85,29.7,NULL,32,1,'','t1','table'),
('T.t1','TMP-rtxtuzg','T(t1)','number',26.3,27.15,28,28.85,29.7,NULL,33,1,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuzg','H(t3)','number',26.3,27.15,28,28.85,29.7,NULL,34,1,'','t3','table'),
('C.t3','TMP-rtxtuzg','C(t3)','number',26.3,27.15,28,28.85,29.7,NULL,35,1,'','t3','table'),
('T.t3','TMP-rtxtuzg','T(t3)','number',26.3,27.15,28,28.85,29.7,NULL,36,1,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuzg','H(t2)','number',26.3,27.15,28,28.85,29.7,NULL,37,1,'','t2','table'),
('C.t2','TMP-rtxtuzg','C(t2)','number',26.3,27.15,28,28.85,29.7,NULL,38,1,'','t2','table'),
('T.t2','TMP-rtxtuzg','T(t2)','number',26.3,27.15,28,28.85,29.7,NULL,39,1,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuzg','H(t4)','number',26.3,27.15,28,28.85,29.7,NULL,40,1,'','t4','table'),
('C.t4','TMP-rtxtuzg','C(t4)','number',26.3,27.15,28,28.85,29.7,NULL,41,1,'','t4','table'),
('T.t4','TMP-rtxtuzg','T(t4)','number',26.3,27.15,28,28.85,29.7,NULL,42,1,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuzg','H(t5)','number',17,17.5,18,18.5,19,NULL,43,1,'','t5','table'),
('C.t5','TMP-rtxtuzg','C(t5)','number',17,17.5,18,18.5,19,NULL,44,1,'','t5','table'),
('T.t5','TMP-rtxtuzg','T(t5)','number',17,17.5,18,18.5,19,NULL,45,1,'','t5','table'),

-- t6 (NULL) - 46-48 dengan order_numb NULL sesuai pola
('H.t6','TMP-rtxtuzg','H(t6)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-rtxtuzg','C(t6)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-rtxtuzg','T(t6)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - 49-51 dengan order_numb NULL
('H.t7','TMP-rtxtuzg','H(t7)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-rtxtuzg','C(t7)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-rtxtuzg','T(t7)','number',17,17.5,18,18.5,19,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54) 
('height.of.flange','TMP-rtxtuzg','Height of Flange','number',402,403.5,405,406.5,408,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzg','Flange Thickness','number',26.3,27.15,28,28.85,29.7,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzg','Width of Web','number',411,412.5,414,415.5,417,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzg','Web Thickness','number',17,17.5,18,18.5,19,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzg','Unit Weight (Kgm)','number',222.7,226.85,232,237.15,241.3,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzg','Radius','number',0,0,22,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzg','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzg','OS','number',0,0,4.86,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtuzg','CoW','number',0,0,0,0,0,2.5,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzg', 'Web Off Center', 'b3-b4/2', 9);