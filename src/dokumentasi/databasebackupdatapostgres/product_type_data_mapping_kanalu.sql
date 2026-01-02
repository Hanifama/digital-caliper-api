INSERT INTO product_type_data_mapping (id, prodtype_id, code, group_name, input_code, input_label, position, enabled) VALUES
-- Height 
(uuid_generate_v4(), 'KANAL-U', 'height', 'Height', 'height.min', 'Min', 's', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'height', 'Height', 'height.tlt50', 'T<50%', 's', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'height', 'Height', 'height.nominal', 'Nominal', 's', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'height', 'Height', 'height.tgt50', 'T>50%', 's', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'height', 'Height', 'height.max', 'Max', 's', FALSE),

-- Width 
(uuid_generate_v4(), 'KANAL-U', 'width', 'Width', 'width.min', 'Min', 'R2', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'width', 'Width', 'width.tlt50', 'T<50%', 'R2', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'width', 'Width', 'width.nominal', 'Nominal', 'R2', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'width', 'Width', 'width.tgt50', 'T>50%', 'R2', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'width', 'Width', 'width.max', 'Max', 'R2', FALSE),

-- s
(uuid_generate_v4(), 'KANAL-U', 's', 's', 's.min', 'Min', 'e', FALSE),
(uuid_generate_v4(), 'KANAL-U', 's', 's', 's.tlt50', 'T<50%', 'e', FALSE),
(uuid_generate_v4(), 'KANAL-U', 's', 's', 's.nominal', 'Nominal', 'e', FALSE),
(uuid_generate_v4(), 'KANAL-U', 's', 's', 's.tgt50', 'T>50%', 'e', FALSE),
(uuid_generate_v4(), 'KANAL-U', 's', 's', 's.max', 'Max', 'e', FALSE),

-- t=R1 
(uuid_generate_v4(), 'KANAL-U', 't=r1', 't=R1', 't=r1.min', 'Min', 't=R1', FALSE),
(uuid_generate_v4(), 'KANAL-U', 't=r1', 't=R1', 't=r1.tlt50', 'T<50%', 't=R1', FALSE),
(uuid_generate_v4(), 'KANAL-U', 't=r1', 't=R1', 't=r1.nominal', 'Nominal', 't=R1', FALSE),
(uuid_generate_v4(), 'KANAL-U', 't=r1', 't=R1', 't=r1.tgt50', 'T>50%', 't=R1', FALSE),
(uuid_generate_v4(), 'KANAL-U', 't=r1', 't=R1', 't=r1.max', 'Max', 't=R1', FALSE),

-- r2 
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.min', 'Min', 'd', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.tlt50', 'T<50%', 'd', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.nominal', 'Nominal', 'd', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.tgt50', 'T>50%', 'd', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.max', 'Max', 'd', FALSE),

(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.min', 'Min', 'Ø', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.tlt50', 'T<50%', 'Ø', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.nominal', 'Nominal', 'Ø', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.tgt50', 'T>50%', 'Ø', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'r2', 'R2', 'r2.max', 'Max', 'Ø', FALSE),

-- Cross Section Area
(uuid_generate_v4(), 'KANAL-U', 'cross.section.area', 'Cross Section Area', 'cross.section.area.min', 'Min', 'Crossec.A', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'cross.section.area', 'Cross Section Area', 'cross.section.area.tlt50', 'T<50%', 'Crossec.A', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'cross.section.area', 'Cross Section Area', 'cross.section.area.nominal', 'Nominal', 'Crossec.A', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'cross.section.area', 'Cross Section Area', 'cross.section.area.tgt50', 'T>50%', 'Crossec.A', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'cross.section.area', 'Cross Section Area', 'cross.section.area.max', 'Max', 'Crossec.A', FALSE),

-- AL
(uuid_generate_v4(), 'KANAL-U', 'al', 'AL', 'al.min', 'Min', 'AL', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'al', 'AL', 'al.tlt50', 'T<50%', 'AL', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'al', 'AL', 'al.nominal', 'Nominal', 'AL', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'al', 'AL', 'al.tgt50', 'T>50%', 'AL', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'al', 'AL', 'al.max', 'Max', 'AL', FALSE),

-- AG
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.min', 'Min', 'emin', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tlt50', 'T<50%', 'emin', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.nominal', 'Nominal', 'emin', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tgt50', 'T>50%', 'emin', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.max', 'Max', 'emin', FALSE),

(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.min', 'Min', 'emax', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tlt50', 'T<50%', 'emax', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.nominal', 'Nominal', 'emax', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tgt50', 'T>50%', 'emax', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.max', 'Max', 'emax', FALSE),

(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.min', 'Min', 'AG', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tlt50', 'T<50%', 'AG', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.nominal', 'Nominal', 'AG', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.tgt50', 'T>50%', 'AG', FALSE),
(uuid_generate_v4(), 'KANAL-U', 'ag', 'AG', 'ag.max', 'Max', 'AG', FALSE);
