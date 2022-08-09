import { Inject, Injectable, } from '@nestjs/common';
import { Repository, } from 'typeorm';
import { PROVIDERS, } from '../../shared/shared.constants';
import { Card, } from './card.entity';
import { ICard, } from './card.interface';
import { CreateCardDto, } from './card.dto';
import { UtilService, } from '../../shared/services/util.service';
import { LoggerService, } from '../../shared/services/logger.service';
// eslint-disable-next-line import/no-cycle
import { ObjectMethods, } from './card.module';
import { SomeExistingClass, } from './card1.module';

@Injectable()
export class CardService {
  private logger: LoggerService = new LoggerService(CardService.name);

  constructor(
    @Inject(PROVIDERS.CARD_REPOSITORY) private readonly cardRepository: Repository<Card>,
    @Inject('myObject') private readonly myobject: ObjectMethods,
    @Inject('someNickName') private readonly someClass: SomeExistingClass,
    private readonly utilService: UtilService
  ) { }

  public async listCards(user_id: string, account_id: string): Promise<[ICard[], number]> {
    return this.cardRepository.findAndCount({
      where: {
        user_id,
        account_id,
      },
    });
  }

  public async getCard(card_id: string): Promise<ICard> {
    this.myobject.hello('neeraj');
    this.someClass.hello();
    return this.cardRepository.findOne({
      where: {
        id: card_id,
      },
    });
  }

  public async createCard(data: CreateCardDto): Promise<Record<string, any>> {
    const { account_id: accountId, user_id: userId, nick_name: nickName, } = data;
    const card = this.utilService.generateCard();
    const cardData: Card = {
      account_id: accountId,
      user_id: userId,
      nick_name: nickName,
      ...card,
    } as any;
    const newCard = await this.cardRepository.save(cardData);
    return {
      id: newCard.id,
      last_four: newCard.last_four,
    };
  }
}
