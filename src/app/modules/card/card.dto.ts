/* eslint-disable max-classes-per-file */
import { IsUUID, IsDefined, } from 'class-validator';
import { GenericPayload, } from '../../shared/models/base.dto';

export class GetCardsParamsDto {
  @IsUUID()
  @IsDefined()
    userId: string;

  @IsUUID()
  @IsDefined()
    accountId: string;
}

export class GetCardParamsDto {
  @IsUUID()
  @IsDefined()
    id: string;
}

export class CreateCardDto {
  @IsUUID()
  @IsDefined()
    user_id: string;

  @IsUUID()
  @IsDefined()
    account_id: string;

  @IsUUID()
  @IsDefined()
    nick_name: string;
}

export class CreateCardPayload extends GenericPayload<CreateCardDto> {
  public data!: CreateCardDto;
}
