import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqldsDataSource} from '../datasources';
import {Raza, RazaRelations} from '../models';

export class RazaRepository extends DefaultCrudRepository<
  Raza,
  typeof Raza.prototype.id,
  RazaRelations
> {
  constructor(
    @inject('datasources.postgresqlds') dataSource: PostgresqldsDataSource,
  ) {
    super(Raza, dataSource);
  }
}
