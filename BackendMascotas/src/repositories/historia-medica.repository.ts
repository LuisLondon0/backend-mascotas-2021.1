import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqldsDataSource} from '../datasources';
import {HistoriaMedica, HistoriaMedicaRelations} from '../models';

export class HistoriaMedicaRepository extends DefaultCrudRepository<
  HistoriaMedica,
  typeof HistoriaMedica.prototype.id,
  HistoriaMedicaRelations
> {
  constructor(
    @inject('datasources.postgresqlds') dataSource: PostgresqldsDataSource,
  ) {
    super(HistoriaMedica, dataSource);
  }
}
