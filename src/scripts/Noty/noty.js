import Noty from "noty";
import '../../../node_modules/noty/lib/noty.css';

export function showNoty(text, type = 'warning') {
    new Noty({
        text: text,
        type: type,
        layout: 'topCenter',
        timeout: 1000,
    }).show();
}