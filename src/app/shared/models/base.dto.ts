import { IsNotEmpty, IsObject, ValidateNested, } from 'class-validator';

export class GenericPayload<T> {
  @ValidateNested()
  @IsObject()
  @IsNotEmpty()
  public data!: T;
}
