INSERT INTO product_type_data_mapping (id, prodtype_id, code, group_name, input_code, input_label, position, enabled) VALUES
-- Widht of Web - HANYA untuk H-Top, H-Center, H-Bottom - SEMUA DISABLED
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.min', 'Min', 'H-Top', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.tlt50', 'T<50%', 'H-Top', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.nominal', 'Nominal', 'H-Top', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.tgt50', 'T>50%', 'H-Top', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.max', 'Max', 'H-Top', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.min', 'Min', 'H-Bottom', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.tlt50', 'T<50%', 'H-Bottom', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.nominal', 'Nominal', 'H-Bottom', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.tgt50', 'T>50%', 'H-Bottom', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'width.of.web', 'Width of Web', 'width.of.web.max', 'Max', 'H-Bottom', FALSE),

-- Height of Flange - HANYA untuk B1, B2 - SEMUA DISABLED
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.min', 'Min', 'B1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.tlt50', 'T<50%', 'B1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.nominal', 'Nominal', 'B1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.tgt50', 'T>50%', 'B1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.max', 'Max', 'B1', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.min', 'Min', 'B2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.tlt50', 'T<50%', 'B2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.nominal', 'Nominal', 'B2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.tgt50', 'T>50%', 'B2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'height.of.flange', 'Height of Flange', 'height.of.flange.max', 'Max', 'B2', FALSE),

-- Flange Thickness - HANYA untuk t1, t2, t3, t4 - SEMUA DISABLED
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 't1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 't1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 't1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 't1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 't1', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 't2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 't2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 't2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 't2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 't2', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 't3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 't3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 't3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 't3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 't3', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 't4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 't4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 't4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 't4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 't4', FALSE),

-- Flange Thicknees - untuk b1 - b4
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 'b1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 'b1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 'b1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 'b1', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 'b1', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 'b2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 'b2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 'b2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 'b2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 'b2', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 'b3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 'b3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 'b3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 'b3', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 'b3', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.min', 'Min', 'b4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tlt50', 'T<50%', 'b4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.nominal', 'Nominal', 'b4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.tgt50', 'T>50%', 'b4', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'flange.thickness', 'Flange Thickness', 'flange.thickness.max', 'Max', 'b4', FALSE),

-- Web Off Center  - untuk (b1-b2/2) dan (b3-b4/2)
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.min', 'Min', 'b1-b2/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.tlt50', 'T<50%', 'b1-b2/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.nominal', 'Nominal', 'b1-b2/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.tgt50', 'T>50%', 'b1-b2/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.max', 'Max', 'b1-b2/2', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.min', 'Min', 'b3-b4/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.tlt50', 'T<50%', 'b3-b4/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.nominal', 'Nominal', 'b3-b4/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.tgt50', 'T>50%', 'b3-b4/2', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Flange Thickness', 'web.off.center.max', 'Max', 'b3-b4/2', FALSE),


-- Web Thickness - untuk t5, t6, t7 - SEMUA DISABLED
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.min', 'Min', 't5', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tlt50', 'T<50%', 't5', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.nominal', 'Nominal', 't5', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tgt50', 'T>50%', 't5', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.max', 'Max', 't5', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.min', 'Min', 't6', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tlt50', 'T<50%', 't6', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.nominal', 'Nominal', 't6', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tgt50', 'T>50%', 't6', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.max', 'Max', 't6', FALSE),

(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.min', 'Min', 't7', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tlt50', 'T<50%', 't7', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.nominal', 'Nominal', 't7', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.tgt50', 'T>50%', 't7', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.thickness', 'Web Thickness', 'web.thickness.max', 'Max', 't7', FALSE),


-- Unit Weight (Kgm) 
(uuid_generate_v4(), 'WF-BEAM', 'unit.weight', 'Unit Weight (Kgm)', 'unit.weight.min', 'Min', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'unit.weight', 'Unit Weight (Kgm)', 'unit.weight.tlt50', 'T<50%', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'unit.weight', 'Unit Weight (Kgm)', 'unit.weight.nominal', 'Nominal', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'unit.weight', 'Unit Weight (Kgm)', 'unit.weight.tgt50', 'T>50%', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'unit.weight', 'Unit Weight (Kgm)', 'unit.weight.max', 'Max', '', FALSE),

-- Web Off Center 
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Web Off Center', 'web.off.center.min', 'Min', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Web Off Center', 'web.off.center.tlt50', 'T<50%', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Web Off Center', 'web.off.center.nominal', 'Nominal', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Web Off Center', 'web.off.center.tgt50', 'T>50%', '', FALSE),
(uuid_generate_v4(), 'WF-BEAM', 'web.off.center', 'Web Off Center', 'web.off.center.max', 'Max', '', FALSE),

-- Out Of Square
(uuid_generate_v4(), 'WF-BEAM', 'out.of.square', 'Out of Square', 'out.of.square.nominal', 'Nominal', '', FALSE),

-- Radius 
(uuid_generate_v4(), 'WF-BEAM', 'radius', 'Radius', 'radius.nominal', 'Nominal', '', FALSE),

-- CoW
(uuid_generate_v4(), 'WF-BEAM', 'cow', 'COW', 'cow.nominal', 'Actual', '', FALSE);