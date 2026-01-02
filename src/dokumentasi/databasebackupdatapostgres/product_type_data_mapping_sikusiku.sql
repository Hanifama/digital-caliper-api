INSERT INTO product_type_data_mapping (id, prodtype_id, code, group_name, input_code, input_label, position, enabled) VALUES
-- Height 
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'height', 'Height', 'height.min', 'Min', 'Cx=Cy', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'height', 'Height', 'height.tlt50', 'T<50%', 'Cx=Cy', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'height', 'Height', 'height.nominal', 'Nominal', 'Cx=Cy', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'height', 'Height', 'height.tgt50', 'T>50%', 'Cx=Cy', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'height', 'Height', 'height.max', 'Max', 'Cx=Cy', FALSE),

-- Widht 
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'width', 'Width', 'width.min', 'Min', 'H', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'width', 'Width', 'width.tlt50', 'T<50%', 'H', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'width', 'Width', 'width.nominal', 'Nominal', 'H', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'width', 'Width', 'width.tgt50', 'T>50%', 'H', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'width', 'Width', 'width.max', 'Max', 'H', FALSE),

-- t 
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 't', 't', 't.min', 'Min', 'B', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 't', 't', 't.tlt50', 'T<50%', 'B', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 't', 't', 't.nominal', 'Nominal', 'B', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 't', 't', 't.tgt50', 'T>50%', 'B', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 't', 't', 't.max', 'Max', 'B', FALSE),

-- r1
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r1', 'r1', 'r1.min', 'Min', 't', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r1', 'r1', 'r1.tlt50', 'T<50%', 't', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r1', 'r1', 'r1.nominal', 'Nominal', 't', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r1', 'r1', 'r1.tgt50', 'T>50%', 't', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r1', 'r1', 'r1.max', 'Max', 't', FALSE),

-- r2
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.min', 'Min', 'r2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.tlt50', 'T<50%', 'r2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.nominal', 'Nominal', 'r2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.tgt50', 'T>50%', 'r2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.max', 'Max', 'r2', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.min', 'Min', 'Geo(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.tlt50', 'T<50%', 'Geo(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.nominal', 'Nominal', 'Geo(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.tgt50', 'T>50%', 'Geo(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'r2', 'r2', 'r2.max', 'Max', 'Geo(ix=iy)', FALSE),

-- Center of Gravity
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 'H2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 'H2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 'H2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 'H2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 'H2', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 'B2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 'B2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 'B2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 'B2', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 'B2', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 't5', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 't5', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 't5', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 't5', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 't5', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 'Rad(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 'Rad(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 'Rad(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 'Rad(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 'Rad(Max iu)', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 'A', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 'A', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 'A', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 'A', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 'A', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.min', 'Min', 'Geo(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tlt50', 'T<50%', 'Geo(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.nominal', 'Nominal', 'Geo(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.tgt50', 'T>50%', 'Geo(Max iu)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'center.of.gravity', 'Center of Gravity', 'center.of.gravity.max', 'Max', 'Geo(Max iu)', FALSE),

-- Radius of Gravity
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.min', 'Min', 'Rad(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tlt50', 'T<50%', 'Rad(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.nominal', 'Nominal', 'Rad(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tgt50', 'T>50%', 'Rad(ix=iy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.max', 'Max', 'Rad(ix=iy)', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.min', 'Min', 'Rad(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tlt50', 'T<50%', 'Rad(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.nominal', 'Nominal', 'Rad(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tgt50', 'T>50%', 'Rad(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.max', 'Max', 'Rad(Max iv)', FALSE),

(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.min', 'Min', 'Geo(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tlt50', 'T<50%', 'Geo(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.nominal', 'Nominal', 'Geo(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.tgt50', 'T>50%', 'Geo(Max iv)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'radius.of.gravity', 'Radius of Gravity', 'radius.of.gravity.max', 'Max', 'Geo(Max iv)', FALSE),

-- Modulus of Section
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'modulus.of.section', 'Modulus of Section', 'modulus.of.section.min', 'Min', 'Mod(Zx=Zy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'modulus.of.section', 'Modulus of Section', 'modulus.of.section.tlt50', 'T<50%', 'Mod(Zx=Zy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'modulus.of.section', 'Modulus of Section', 'modulus.of.section.nominal', 'Nominal', 'Mod(Zx=Zy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'modulus.of.section', 'Modulus of Section', 'modulus.of.section.tgt50', 'T>50%', 'Mod(Zx=Zy)', FALSE),
(uuid_generate_v4(), 'SIKU-SAMA-KAKI', 'modulus.of.section', 'Modulus of Section', 'modulus.of.section.max', 'Max', 'Mod(Zx=Zy)', FALSE);