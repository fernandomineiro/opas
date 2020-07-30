select * from membro;
select * from lots;
SELECT * FROM bingo.fila_compra_series;
select * from membro_cartelas;
select * from bolas_sorteadas;
select * from ganhadores;
select * from partida1;
select * from relatorio_membro_cartelas;
select * from relatorio_bolas_sorteadas;

truncate table ganhadores;
truncate table relatorio_membro_cartelas;
truncate table relatorio_partida1;
truncate table relatorio_bolas_sorteadas;

truncate table fila_compra_series;
truncate table membro_cartelas;
truncate table partida1;
truncate table bolas_sorteadas;


CREATE TABLE `relatorio_partida1` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL DEFAULT '1',
  `sala_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dia` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mes` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `relatorio_bolas_sorteadas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partida_id` int(11) NOT NULL,
  `sala_id` int(11) NOT NULL,
  `bolas` json DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `relatorio_membro_cartelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `membro_id` int(11) DEFAULT NULL,
  `cartela_id` int(11) DEFAULT NULL,
  `partida_id` int(11) DEFAULT NULL,
  `sala_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;