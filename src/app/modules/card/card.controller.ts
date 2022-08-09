import {
  Body, Controller, Get, Param, Post, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { CreateCardPayload, GetCardParamsDto, GetCardsParamsDto, } from './card.dto';
import { ICard, } from './card.interface';
// eslint-disable-next-line import/no-cycle
import { CardService, } from './card.service';

@Controller('card')

export class CardController {
  constructor(
    private readonly cardService: CardService
  ) {}

  @Get(':userId/:accountId')
  getAllCards(@Param() params: GetCardsParamsDto): Promise<[ICard[], number]> {
    const { userId, accountId, } = params;
    return this.cardService.listCards(userId, accountId);
  }

  @Get(':id')
  findOneDocument(@Param() params: GetCardParamsDto): Promise<ICard> {
    return this.cardService.getCard(params.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCard(@Body() body: CreateCardPayload): Promise<Record<string, any>> {
    return this.cardService.createCard(body.data);
  }
}
// /card
// GET : /card/:userId/:accountId
// GET : /card/:id
// POST : /card/

// router.get('/app/id, fiunction())

// expres -> req.body

// reflect-metadata -> npm

// reflect.getMetaData('design:paramtypes',CardController )

// [CardService]

// reflect.getMetaData('design:paramtypes',CardController,  getAllCards)

// [GetCardsParamsDto]

/*
    {
        PROVIDE: new CardService(),
        'myObject': injectableObject
        SomeExistingClass: new SomeExistingClass(),
        'someNickName': new SomeExistingClass() // -> SomeExistingClass
    }
*/

// new CardService()

// IOC -> inversion of control
// IOC -> DI (dependency injection)
// [cardService]= [dep1, dep2, dep3, de4];
// new CardService(dep1, dep2, dep3, de4)
// cardServiceContainer = new CardService(dep1, dep2, dep3, de4, dep4);

// container.get(CardService)
// new CardService()

// inversify
