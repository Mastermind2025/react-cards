//It works!
import { format } from 'date-fns';
//месяцы будут на русском вместо английского. 
// В функцию добавили объект {locale: ru,} как аргумент

import { ru } from 'date-fns/locale';

export const formatEventStart = start => {
    return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', {locale: ru,});
};