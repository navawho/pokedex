import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

export default function (date) {
  const formatedDate = new Date(date);

  const interval = formatDistanceToNow(formatedDate, { addSuffix: true, locale: ptBr } );

  return "Capturado " + interval;
}