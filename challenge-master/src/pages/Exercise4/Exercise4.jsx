import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as WeatherIcon } from "../../assets/icons/LOGO.svg";
import classes from "./Excercise4.module.scss";

const prototypeUrl =
    "//xd.adobe.com/spec/9ebd698b-429e-4369-51b6-da668ae21fd2-e88c";
const apiUrl = "//openweathermap.org/api";

const instructions = [
    "Neste exercício você terá que implementar um dashboard de previsão do tempo (use esse mesmo arquivo para implementar - você pode remover aqui o código que desejar).",
    () => (
        <>
            Você deve seguir todas as especificações do protótipo (seja o mais
            fiel ao protótipo):
            <Link target="_blank" to={prototypeUrl}>
                {" "}
                https:{prototypeUrl}
            </Link>
        </>
    ),
    () => (
        <>
            Use a api{" "}
            <Link target="_blank" to={apiUrl}>
                https:{apiUrl}
            </Link>{" "}
            para buscar dados de previsão do tempo.
        </>
    ),
    "Mostre temperatura em graus Celsius",
    "Mostre a cidade atual do usuário por padrão (dica: vamos testar com outras cidades)",
    "Mostre data atual formatada",
    "Buscar dados previsão usando a api indicada (você pode mockar os dados, mas irá receber menos pontos)",
    "Mostre temperatura, umidade, vento, direção vento atuais",
    "Mostre ícone de previsão do tempo de acordo com a previsão",
    "Buscar dados previsão para 5 dias da api indicada",
    "Mostre previsão para próximos 5 dias",
    "Pesquisar e alterar cidade"
];

export default function Exercise4() {
    const localizacao = require('../../assets/icons/localizacao.svg');
    const minima = require('../../assets/icons/minima.svg');
    const media = require('../../assets/icons/media.svg');
    const maxima = require('../../assets/icons/maxima.svg');

    return (
       <div className={classes.Container}>
          <div className={classes.Header}>
              <WeatherIcon />
              <input placeholder="Buscar cidade" className={classes.InputSearch} type="text">
              </input>
          </div>
          <div className={classes.GeneralContent}>
                <div className={classes.TodayContent}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img src={localizacao} alt="" />
                                <span className={classes.City}>Campinas</span>
                            </div>
                            <span className={classes.Date}>Quin, 10 de outubro de 2019</span>
                        </div>
                        <div>
                            <div style={{display: 'inline', marginRight:'18px'}}>
                                <img src={minima} alt="" style={{marginRight:'8px'}} />
                                <span style={{color: '#4B6584', fontWeight: 'bold'}}>Min 15°</span>
                            </div>
                            <div style={{display: 'inline'}}>
                                <img src={maxima} alt=""  style={{marginRight:'8px'}} />
                                <span style={{color:'#4B6584',  fontWeight: 'bold'}}>Max 26°</span>
                            </div>
                         </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'flex-start', marginTop: '30px'}}>
                        <img src={media} alt="" />
                        <span style={{color: '#4B6584', fontSize: '100px'}}>23°</span> 
                    </div>
                </div>
          </div>
       </div>
    );
}
