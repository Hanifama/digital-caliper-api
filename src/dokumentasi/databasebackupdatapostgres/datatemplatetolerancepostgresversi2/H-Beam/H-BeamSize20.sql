-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzi', 'H-BEAM', 'HB 458X417X30X50', 'HB 458X417X30X50', '458X417X30X50', 'H-BEAM 458X417X30X50', 'HB 458X417X30X50', 'Template HB 458X417X30X50', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuzi','H(H-top)','number',455,456.5,458,459.5,461,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzi','C(H-top)','number',455,456.5,458,459.5,461,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzi','T(H-top)','number',455,456.5,458,459.5,461,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuzi','H(H-bottom)','number',455,456.5,458,459.5,461,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzi','C(H-bottom)','number',455,456.5,458,459.5,461,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzi','T(H-bottom)','number',455,456.5,458,459.5,461,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuzi','H(B1)','number',414,415.5,417,418.5,420,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzi','C(B1)','number',414,415.5,417,418.5,420,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzi','T(B1)','number',414,415.5,417,418.5,420,NULL,9,true,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuzi','H(B2)','number',414,415.5,417,418.5,420,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzi','C(B2)','number',414,415.5,417,418.5,420,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzi','T(B2)','number',414,415.5,417,418.5,420,NULL,12,true,'','B2','table'),

-- b1 (13-15) - TOLERANCE DIUBAH: mengikuti Flange Thickness (48,49,50,51,52)
('H.b1','TMP-rtxtuzi','H(b1)','number',48,49,50,51,52,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzi','C(b1)','number',48,49,50,51,52,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzi','T(b1)','number',48,49,50,51,52,NULL,15,true,'','b1','table'),

-- b3 (16-18) - TOLERANCE DIUBAH: mengikuti Flange Thickness (48,49,50,51,52)
('H.b3','TMP-rtxtuzi','H(b3)','number',48,49,50,51,52,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzi','C(b3)','number',48,49,50,51,52,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzi','T(b3)','number',48,49,50,51,52,NULL,18,true,'','b3','table'),

-- b2 (19-21) - TOLERANCE DIUBAH: mengikuti Flange Thickness (48,49,50,51,52)
('H.b2','TMP-rtxtuzi','H(b2)','number',48,49,50,51,52,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzi','C(b2)','number',48,49,50,51,52,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzi','T(b2)','number',48,49,50,51,52,NULL,21,true,'','b2','table'),

-- b4 (22-24) - TOLERANCE DIUBAH: mengikuti Flange Thickness (48,49,50,51,52)
('H.b4','TMP-rtxtuzi','H(b4)','number',48,49,50,51,52,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzi','C(b4)','number',48,49,50,51,52,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzi','T(b4)','number',48,49,50,51,52,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - tetap menggunakan toleransi Web Off Center karena perhitungan offset
('H.b1-b2/2','TMP-rtxtuzi','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzi','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzi','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - tetap menggunakan toleransi Web Off Center karena perhitungan offset
('H.b3-b4/2','TMP-rtxtuzi','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzi','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzi','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-rtxtuzi','H(t1)','number',48,49,50,51,52,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzi','C(t1)','number',48,49,50,51,52,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzi','T(t1)','number',48,49,50,51,52,NULL,33,true,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuzi','H(t3)','number',48,49,50,51,52,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzi','C(t3)','number',48,49,50,51,52,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzi','T(t3)','number',48,49,50,51,52,NULL,36,true,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuzi','H(t2)','number',48,49,50,51,52,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzi','C(t2)','number',48,49,50,51,52,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzi','T(t2)','number',48,49,50,51,52,NULL,39,true,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuzi','H(t4)','number',48,49,50,51,52,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzi','C(t4)','number',48,49,50,51,52,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzi','T(t4)','number',48,49,50,51,52,NULL,42,true,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuzi','H(t5)','number',28.5,29.25,30,30.75,31.5,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzi','C(t5)','number',28.5,29.25,30,30.75,31.5,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzi','T(t5)','number',28.5,29.25,30,30.75,31.5,NULL,45,true,'','t5','table'),

-- t6 (46-48) - order_numb diisi berturut-turut
('H.t6','TMP-rtxtuzi','H(t6)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzi','C(t6)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzi','T(t6)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t6','table'),

-- t7 (49-51) - order_numb diisi berturut-turut
('H.t7','TMP-rtxtuzi','H(t7)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzi','C(t7)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzi','T(t7)','number',28.5,29.25,30,30.75,31.5,NULL,NULL,true,'','t7','table'),

-- FormRight (52-60)
('height.of.flange','TMP-rtxtuzi','Height of Flange','number',414,415.5,417,418.5,420,0,52,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzi','Flange Thickness','number',48,49,50,51,52,0,53,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzi','Width of Web','number',455,456.5,458,459.5,461,0,54,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzi','Web Thickness','number',28.5,29.25,30,30.75,31.5,0,55,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzi','Unit Weight (Kgm)','number',398.4,406.7,415,423.3,431.6,0,56,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzi','Radius','number',0,0,22,0,0,0,57,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzi','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzi','OS','number',0,0,5,0,0,0,59,true,'','FormRight','OS'),
('cow','TMP-rtxtuzi','CoW','number',0,0,0,0,0,2.5,60,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 'b1', 4),  -- DIUBAH: b1 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 'b2', 5),  -- DIUBAH: b2 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 'b3', 6),  -- DIUBAH: b3 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 'b4', 7),  -- DIUBAH: b4 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'OS', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Radius', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'CoW', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Web Thickness', 't5', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Web Thickness', 't6', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Web Thickness', 't7', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Web Off Center', 'b1-b2/2', 8),  -- Tetap di Web Off Center karena ini perhitungan offset
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzi', 'Web Off Center', 'b3-b4/2', 9); -- Tetap di Web Off Center karena ini perhitungan offset