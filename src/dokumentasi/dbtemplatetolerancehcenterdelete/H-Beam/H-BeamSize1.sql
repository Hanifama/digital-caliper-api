-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuyp', 'H-BEAM', 'HB 100X100X6X8', 'HB 100X100X6X8', '100X100X6X8', 'H-BEAM 100X100X6X8', 'HB 100X100X6X8', 'Template HB 100X100X6X8', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuyp','H(H-top)','number',98,99,100,101,102,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuyp','C(H-top)','number',98,99,100,101,102,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuyp','T(H-top)','number',98,99,100,101,102,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuyp','H(H-bottom)','number',98,99,100,101,102,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuyp','C(H-bottom)','number',98,99,100,101,102,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuyp','T(H-bottom)','number',98,99,100,101,102,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuyp','H(B1)','number',97.5,98.75,100,101.25,102.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtuyp','C(B1)','number',97.5,98.75,100,101.25,102.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtuyp','T(B1)','number',97.5,98.75,100,101.25,102.5,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuyp','H(B2)','number',97.5,98.75,100,101.25,102.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtuyp','C(B2)','number',97.5,98.75,100,101.25,102.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtuyp','T(B2)','number',97.5,98.75,100,101.25,102.5,NULL,12,1,'','B2','table'),

-- b1 (13-15)
('H.b1','TMP-rtxtuyp','H(b1)','number',7,7.5,8,8.5,9,NULL,13,1,'','b1','table'),
('C.b1','TMP-rtxtuyp','C(b1)','number',7,7.5,8,8.5,9,NULL,14,1,'','b1','table'),
('T.b1','TMP-rtxtuyp','T(b1)','number',7,7.5,8,8.5,9,NULL,15,1,'','b1','table'),

-- b3 (16-18)
('H.b3','TMP-rtxtuyp','H(b3)','number',7,7.5,8,8.5,9,NULL,16,1,'','b3','table'),
('C.b3','TMP-rtxtuyp','C(b3)','number',7,7.5,8,8.5,9,NULL,17,1,'','b3','table'),
('T.b3','TMP-rtxtuyp','T(b3)','number',7,7.5,8,8.5,9,NULL,18,1,'','b3','table'),

-- b2 (19-21)
('H.b2','TMP-rtxtuyp','H(b2)','number',7,7.5,8,8.5,9,NULL,19,1,'','b2','table'),
('C.b2','TMP-rtxtuyp','C(b2)','number',7,7.5,8,8.5,9,NULL,20,1,'','b2','table'),
('T.b2','TMP-rtxtuyp','T(b2)','number',7,7.5,8,8.5,9,NULL,21,1,'','b2','table'),

-- b4 (22-24)
('H.b4','TMP-rtxtuyp','H(b4)','number',7,7.5,8,8.5,9,NULL,22,1,'','b4','table'),
('C.b4','TMP-rtxtuyp','C(b4)','number',7,7.5,8,8.5,9,NULL,23,1,'','b4','table'),
('T.b4','TMP-rtxtuyp','T(b4)','number',7,7.5,8,8.5,9,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27)
('H.b1-b2/2','TMP-rtxtuyp','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuyp','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuyp','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-rtxtuyp','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuyp','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuyp','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-rtxtuyp','H(t1)','number',7,7.5,8,8.5,9,NULL,31,1,'','t1','table'),
('C.t1','TMP-rtxtuyp','C(t1)','number',7,7.5,8,8.5,9,NULL,32,1,'','t1','table'),
('T.t1','TMP-rtxtuyp','T(t1)','number',7,7.5,8,8.5,9,NULL,33,1,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuyp','H(t3)','number',7,7.5,8,8.5,9,NULL,34,1,'','t3','table'),
('C.t3','TMP-rtxtuyp','C(t3)','number',7,7.5,8,8.5,9,NULL,35,1,'','t3','table'),
('T.t3','TMP-rtxtuyp','T(t3)','number',7,7.5,8,8.5,9,NULL,36,1,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuyp','H(t2)','number',7,7.5,8,8.5,9,NULL,37,1,'','t2','table'),
('C.t2','TMP-rtxtuyp','C(t2)','number',7,7.5,8,8.5,9,NULL,38,1,'','t2','table'),
('T.t2','TMP-rtxtuyp','T(t2)','number',7,7.5,8,8.5,9,NULL,39,1,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuyp','H(t4)','number',7,7.5,8,8.5,9,NULL,40,1,'','t4','table'),
('C.t4','TMP-rtxtuyp','C(t4)','number',7,7.5,8,8.5,9,NULL,41,1,'','t4','table'),
('T.t4','TMP-rtxtuyp','T(t4)','number',7,7.5,8,8.5,9,NULL,42,1,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuyp','H(t5)','number',5.3,5.65,6,6.35,6.7,NULL,43,1,'','t5','table'),
('C.t5','TMP-rtxtuyp','C(t5)','number',5.3,5.65,6,6.35,6.7,NULL,44,1,'','t5','table'),
('T.t5','TMP-rtxtuyp','T(t5)','number',5.3,5.65,6,6.35,6.7,NULL,45,1,'','t5','table'),

-- t6 (NULL) - dengan order_numb NULL
('H.t6','TMP-rtxtuyp','H(t6)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-rtxtuyp','C(t6)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-rtxtuyp','T(t6)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - dengan order_numb NULL  
('H.t7','TMP-rtxtuyp','H(t7)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-rtxtuyp','C(t7)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-rtxtuyp','T(t7)','number',5.3,5.65,6,6.35,6.7,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54) 
('height.of.flange','TMP-rtxtuyp','Height of Flange','number',97.5,98.75,100,101.25,102.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuyp','Flange Thickness','number',7,7.5,8,8.5,9,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuyp','Width of Web','number',98,99,100,101,102,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuyp','Web Thickness','number',5.3,5.65,6,6.35,6.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuyp','Unit Weight (Kgm)','number',16.1,16.5,16.9,17.3,17.7,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuyp','Radius','number',0,0,8,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuyp','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtuyp','OS','number',0,0,1.5,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtuyp','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
('MAP8132416XB', 'TMP-rtxtuyp', 'Width of Web', 'H-Bottom', 1),
('MAP8132411DO', 'TMP-rtxtuyp', 'Flange Thickness', 't4', 2),
('MAP8132414H9', 'TMP-rtxtuyp', 'Flange Thickness', 'b1', 3),
('MAP8132415DP', 'TMP-rtxtuyp', 'Flange Thickness', 't1', 0),
('MAP8132418TC', 'TMP-rtxtuyp', 'Flange Thickness', 'b2', 4),
('MAP813241A0O', 'TMP-rtxtuyp', 'Flange Thickness', 'b3', 5),
('MAP813241ABM', 'TMP-rtxtuyp', 'Width of Web', 'H-Top', 0),
('MAP813241B75', 'TMP-rtxtuyp', 'Flange Thickness', 'b4', 6),
('MAP813241EL5', 'TMP-rtxtuyp', 'Flange Thickness', 't2', 1),
('MAP813241FZK', 'TMP-rtxtuyp', 'Height of Flange', 'B2', 1),
('MAP813241GML', 'TMP-rtxtuyp', 'OS', '', 0),
('MAP813241HMQ', 'TMP-rtxtuyp', 'Flange Thickness', 't3', 2),
('MAP813241I9G', 'TMP-rtxtuyp', 'Radius', '', 0),
('MAP813241JRA', 'TMP-rtxtuyp', 'Unit Weight (Kgm) (Kgm)', '', 0),
('MAP813241K9T', 'TMP-rtxtuyp', 'Height of Flange', 'B1', 0),
('MAP813241LQV', 'TMP-rtxtuyp', 'CoW', '', 0),
('MAP813241RKY', 'TMP-rtxtuyp', 'Web Thickness', 't5', 0),
('MAP813241USQ', 'TMP-rtxtuyp', 'Web Off Center', 'b1-b2/2', 7),
('MAP813241GJ7', 'TMP-rtxtuyp', 'Web Off Center', 'b3-b4/2', 8);