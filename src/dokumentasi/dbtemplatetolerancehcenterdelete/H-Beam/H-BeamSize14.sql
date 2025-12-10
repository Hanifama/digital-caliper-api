-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuzc', 'H-BEAM', 'HB 388X402X15X15', 'HB 388X402X15X15', '388X402X15X15', 'H-BEAM 388X402X15X15', 'HB 388X402X15X15', 'Template HB 388X402X15X15', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuzc','H(H-top)','number',386,387,388,389,390,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuzc','C(H-top)','number',386,387,388,389,390,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuzc','T(H-top)','number',386,387,388,389,390,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuzc','H(H-bottom)','number',386,387,388,389,390,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzc','C(H-bottom)','number',386,387,388,389,390,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzc','T(H-bottom)','number',386,387,388,389,390,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuzc','H(B1)','number',399,400.5,402,403.5,405,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtuzc','C(B1)','number',399,400.5,402,403.5,405,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtuzc','T(B1)','number',399,400.5,402,403.5,405,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuzc','H(B2)','number',399,400.5,402,403.5,405,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtuzc','C(B2)','number',399,400.5,402,403.5,405,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtuzc','T(B2)','number',399,400.5,402,403.5,405,NULL,12,1,'','B2','table'),

-- b1 (13-15)
('H.b1','TMP-rtxtuzc','H(b1)','number',14,14.5,15,15.5,16,NULL,13,1,'','b1','table'),
('C.b1','TMP-rtxtuzc','C(b1)','number',14,14.5,15,15.5,16,NULL,14,1,'','b1','table'),
('T.b1','TMP-rtxtuzc','T(b1)','number',14,14.5,15,15.5,16,NULL,15,1,'','b1','table'),

-- b3 (16-18) 
('H.b3','TMP-rtxtuzc','H(b3)','number',14,14.5,15,15.5,16,NULL,16,1,'','b3','table'),
('C.b3','TMP-rtxtuzc','C(b3)','number',14,14.5,15,15.5,16,NULL,17,1,'','b3','table'),
('T.b3','TMP-rtxtuzc','T(b3)','number',14,14.5,15,15.5,16,NULL,18,1,'','b3','table'),

-- b2 (19-21)
('H.b2','TMP-rtxtuzc','H(b2)','number',14,14.5,15,15.5,16,NULL,19,1,'','b2','table'),
('C.b2','TMP-rtxtuzc','C(b2)','number',14,14.5,15,15.5,16,NULL,20,1,'','b2','table'),
('T.b2','TMP-rtxtuzc','T(b2)','number',14,14.5,15,15.5,16,NULL,21,1,'','b2','table'),

-- b4 (22-24) 
('H.b4','TMP-rtxtuzc','H(b4)','number',14,14.5,15,15.5,16,NULL,22,1,'','b4','table'),
('C.b4','TMP-rtxtuzc','C(b4)','number',14,14.5,15,15.5,16,NULL,23,1,'','b4','table'),
('T.b4','TMP-rtxtuzc','T(b4)','number',14,14.5,15,15.5,16,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27) 
('H.b1-b2/2','TMP-rtxtuzc','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzc','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzc','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) 
('H.b3-b4/2','TMP-rtxtuzc','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzc','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzc','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33) 
('H.t1','TMP-rtxtuzc','H(t1)','number',14,14.5,15,15.5,16,NULL,31,1,'','t1','table'),
('C.t1','TMP-rtxtuzc','C(t1)','number',14,14.5,15,15.5,16,NULL,32,1,'','t1','table'),
('T.t1','TMP-rtxtuzc','T(t1)','number',14,14.5,15,15.5,16,NULL,33,1,'','t1','table'),

-- t3 (34-36) 
('H.t3','TMP-rtxtuzc','H(t3)','number',14,14.5,15,15.5,16,NULL,34,1,'','t3','table'),
('C.t3','TMP-rtxtuzc','C(t3)','number',14,14.5,15,15.5,16,NULL,35,1,'','t3','table'),
('T.t3','TMP-rtxtuzc','T(t3)','number',14,14.5,15,15.5,16,NULL,36,1,'','t3','table'),

-- t2 (37-39) 
('H.t2','TMP-rtxtuzc','H(t2)','number',14,14.5,15,15.5,16,NULL,37,1,'','t2','table'),
('C.t2','TMP-rtxtuzc','C(t2)','number',14,14.5,15,15.5,16,NULL,38,1,'','t2','table'),
('T.t2','TMP-rtxtuzc','T(t2)','number',14,14.5,15,15.5,16,NULL,39,1,'','t2','table'),

-- t4 (40-42) 
('H.t4','TMP-rtxtuzc','H(t4)','number',14,14.5,15,15.5,16,NULL,40,1,'','t4','table'),
('C.t4','TMP-rtxtuzc','C(t4)','number',14,14.5,15,15.5,16,NULL,41,1,'','t4','table'),
('T.t4','TMP-rtxtuzc','T(t4)','number',14,14.5,15,15.5,16,NULL,42,1,'','t4','table'),

-- t5 (43-45) 
('H.t5','TMP-rtxtuzc','H(t5)','number',14.3,14.65,15,15.35,15.7,NULL,43,1,'','t5','table'),
('C.t5','TMP-rtxtuzc','C(t5)','number',14.3,14.65,15,15.35,15.7,NULL,44,1,'','t5','table'),
('T.t5','TMP-rtxtuzc','T(t5)','number',14.3,14.65,15,15.35,15.7,NULL,45,1,'','t5','table'),

-- t6 (NULL) - dengan order_numb NULL
('H.t6','TMP-rtxtuzc','H(t6)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-rtxtuzc','C(t6)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-rtxtuzc','T(t6)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - dengan order_numb NULL
('H.t7','TMP-rtxtuzc','H(t7)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-rtxtuzc','C(t7)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-rtxtuzc','T(t7)','number',14.3,14.65,15,15.35,15.7,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuzc','Height of Flange','number',399,400.5,402,403.5,405,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzc','Flange Thickness','number',14,14.5,15,15.5,16,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzc','Width of Web','number',386,387,388,389,390,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzc','Web Thickness','number',14.3,14.65,15,15.35,15.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzc','Unit Weight (Kgm)','number',134.4,137.2,140,142.8,145.6,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzc','Radius','number',0,0,22,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzc','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzc','OS','number',0,0,4.82,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtuzc','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 't4', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 'b1', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 'b2', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 'b3', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 'b4', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Web Off Center', 'b1-b2/2', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzc', 'Web Off Center', 'b3-b4/2', 8);