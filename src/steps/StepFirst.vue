<template>
    <div class="question">
        <div v-if="question" class="wrapper">
            <div class="mobile__response">
                <div class="question__img">
                    <img :src="question.img" :alt="question.alt">
                </div>
                <h2 class="question__text">{{ question.text }}</h2>
            </div>
            <ul>
                <li v-for="response in question.responses">
                    <label class="question__answer">
                        <input type="radio" :value="response.text" v-model="answers[questionIndex]">
                        {{ response.text }}
                    </label>
                </li>
            </ul>
        </div>
        <div class="question__controllers">
            <div class="question__steps">
                <div class="querstion__step">
                    Шаг {{ questionIndex + 1 }} из 8
                </div>
                <div class="question__radios">
                    <div class="question__radio" :class="{ active: questionIndex >= 0 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 1 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 2 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 3 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 4 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 5 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 6 }"></div>
                    <div class="question__radio" :class="{ active: questionIndex >= 7 }"></div>
                </div>
            </div>
            <div class="question_controller" v-if="questionIndex === 0">
                <!-- <button class="controller" @click="prev" :disabled="questionIndex < 1">Назад</button> -->
                <router-link style="height: 40px;" class="controller" to="/bibinance/"> Назад </router-link>
                <button class="controller" @click="next" :disabled="!answerSelected">Далее</button>
            </div>
            <div class="question_controller" v-else-if="questionIndex >= 1 && questionIndex <= 6">
                <button class="controller" @click="prev" :disabled="questionIndex < 1">Назад</button>
                <!-- <router-link type="button" class="controller" to="/"> Назад </router-link> -->
                <button class="controller" @click="next" :disabled="!answerSelected">Далее</button>
            </div>
            <div class="question_controller" v-else-if="questionIndex >= 7">
                <button class="controller" @click="prev" :disabled="questionIndex < 1">Назад</button>
                <router-link class="controller" to="/step_2_registration"> Далее </router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'step-first',
    data() {
        return {
            questionIndex: 7,
            answers: [],
            quiz: {
                'questions': [
                    {
                        text: 'Знаете ли Вы, что как гражданин Республики Казахстан можете получать прибыль и инвестировать в акции крупных мировых компаний?',
                        alt: 'Шаг первый',
                        img: require('../assets/img/step_1.png'),
                        responses: [
                            { text: 'Да, знаю' },
                            { text: 'Нет, не знаю' }
                        ],
                    }, {
                        text: 'Знаете ли Вы, что платформа Halyk Инвестиции обеспечивает доход от крупнейших частных и государственных компаний Казахстана?',
                        alt: 'Шаг второй',
                        img: require('../assets/img/step_2.png'),
                        responses: [
                            { text: 'Да, знаю' },
                            { text: 'Нет, не знаю' }
                        ],
                    }, {
                        text: 'Имеете ли Вы опыт в инвестировании?',
                        alt: 'Шаг третий',
                        img: require('../assets/img/step_3.png'),
                        responses: [
                            { text: 'Да, успешно инвестирую' },
                            { text: 'Ранее инвестировал' },
                            { text: 'Нет, никогда не инвестировал' }
                        ],
                    }, {
                        text: 'Как Вы распоряжаетесь своими сбережениями?',
                        alt: 'Шаг четвертый',
                        img: require('../assets/img/step_4.png'),
                        responses: [
                            { text: 'Храню в банке' },
                            { text: 'Инвестирую и приумножаю сбережения' },
                            { text: 'Держу наличные' },
                            { text: 'У меня нет сбережений' }
                        ],
                    }, {
                        text: 'С какой целью вы хотите увеличить достаток?',
                        alt: 'Шаг пятый',
                        img: require('../assets/img/step_5.png'),
                        responses: [
                            { text: 'Хочу обезопасить себя от кризиса' },
                            { text: 'Планирую развить бизнес' },
                            { text: 'Хочу получать дополнительный пассивный доход' }
                        ],
                    }, {
                        text: 'Доход вкладчиков Halyk Инвестиции начинается от 900$ и может достигать 2000$ ежемесячно. Сколько Вы готовы инвестировать для получения такой прибыли?',
                        alt: 'Шаг шестой',
                        img: require('../assets/img/step_6.png'),
                        responses: [
                            { text: 'От 250$ до 500$' },
                            { text: 'От 1000$ до 2000$' },
                            { text: 'Сумма не ограничена' }
                        ],
                    }, {
                        text: 'Как Вы планируете распорядиться заработанными на проекте средствами?',
                        alt: 'Шаг седьмой',
                        img: require('../assets/img/step_7.png'),
                        responses: [
                            { text: 'Буду выплачивать кредит/ипотеку/погашу долги' },
                            { text: 'Куплю себе то что давно хотел' },
                            { text: 'Буду вкладывать далее, чтоб ещё приумножить средства' },
                            { text: 'Не знаю' },
                        ],
                    }, {
                        text: 'Согласно статистике, успех участников на 87.3% выше, при работе с наставником. Зная эту информацию, как Вы бы хотели работать?',
                        alt: 'Шаг восьмой',
                        img: require('../assets/img/step_8.png'),
                        responses: [
                            { text: 'С помощью опытного наставника' },
                            { text: 'Самостоятельно' }
                        ],
                    }
                ],
            },
            answerVal: '',
            activeItem: null,
            answersButtons: [
                { 'id': '0', 'value': 'Да, знаю', "isActive": false },
                { 'id': '1', 'value': 'Нет, не знаю', "isActive": false }
            ],
            userChecked: []
        }
    },
    computed: {
        question() {
            return this.quiz.questions[this.questionIndex];
        },
        answerSelected() {
            return this.answers[this.questionIndex];
        },
    },
    methods: {
        onClickBlock(index) {
            if (this.activeIndex === index) {
                this.activeIndex = -1;
            } else {
                this.activeIndex = index;
            }
        },
        next() {
            if (this.answerSelected) {
                this.questionIndex++;
            }
        },
        prev() {
            this.questionIndex--;
        },
    }
}
</script>
<style>
.question {
    position: relative;
    width: 1170px;
    height: 452px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin: 6% auto;
    padding: 30px;
}

.question__text {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    color: #1E2329;
    width: 540px;
}

.question__img {
    position: absolute;
    top: 20px;
    right: 30px;
}

.question__img img {
    width: 500px;
}

.question__controllers {
    position: absolute;
    bottom: 5px;
    right: 5%;
    display: flex;
    width: 450px;
    justify-content: space-between;
}

.question__steps {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.question__radios {
    display: flex;
}

.question__answers {
    position: relative;
}

.question__answer {
    width: 540px;
    height: 44px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 4px;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 18px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #1E2329;
}

.question__answers input {

    cursor: pointer;
}

input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0 10px 0 0;
    font: inherit;
    color: #B7BDB7;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid #B7BDB7;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #F0B90B;
    box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="radio"]:checked::before,
input[type="radio"]:checked {
    transform: scale(1);
    border-color: #F0B90B;
}


.question__answer.active {
    border: 2px solid #F0B90B;
}


.question__radio {
    background: transparent;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #B7BDB7;
    margin: 2px;
}

.question__radio.active {
    border-color: #F0B90B;
    background: #F0B90B;
}

.question_controller {
    width: 320px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.querstion__step {
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 5px;
}

.controller {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 44px;
    border: 1px solid #B7BDB7;
    border-radius: 4px;
    text-decoration: none;
    color: #000000;
    font-family: sans-serif;
    margin: 5px;
}

.controller.active {
    border-color: #F0B90B;
}

@media screen and (max-width: 1265px) {
    .question {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 10px;
    }

    .question__controllers {
        position: unset;
        display: flex;
        justify-content: space-between;
        width: inherit;
    }

    .question__img {
        position: absolute;
        top: 40px;
        right: 30px;
    }

    .question__img img {
        width: 400px;
    }

    .wrapper {
        width: 100%;
        max-width: 400px;
    }

    .question__text {
        font-size: 21px;
        width: inherit;
    }

    .question ul {
        width: inherit;
    }

    .question__answer {
        width: inherit;
    }

}

@media screen and (max-width: 930px) {
    .question {
        height: unset;
    }

    .question__img img {
        width: 300px;
    }
}

@media screen and (max-width: 830px) {
    .question {
        height: unset;
    }

    .question__img img {
        width: 300px;
    }

    .question__img {
        position: unset;
        margin-bottom: 10px;
    }

    .wrapper {
        max-width: 100%;
    }

    .question__text {
        text-align: center;
    }

    .mobile__response {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .question__radios {
        width: unset;
    }
}

@media screen and (max-width: 468px) {
    .question {
        margin: 0;
        height: 100vh;
        justify-content: unset;
    }

    .question__controllers {
        flex-direction: column-reverse;
        align-items: center;
    }

    .mobile__response {
        flex-direction: column-reverse;
    }

    .question__text {
        height: 170px;
        margin-bottom: 10px;
    }

    .question__img img {
        width: 320px;
    }
}
</style>
