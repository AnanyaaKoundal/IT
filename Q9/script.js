$(document).ready(function () {
    $('#btn-style').on('click', function () {
        $('body').css({
            'font-family': 'Lucida Sans',
            'margin': '0 100px',
            'padding': '20px',
            'background-color': '#f4f4f4',
        });

        $('h1').css({
            'font-size': '40px',
            'font-family': 'Courier New',
            'text-align': 'center',
            'color': 'rgb(26, 47, 201)',
        });

        $('.table').css({
            'width': '100%',
            'margin-top': '20px',
            'border': '3px solid rgb(125 234 117)',
        });

        $('.info').css({
            'width': '100%',
            'border': '3px solid transparent',
        });
        
        $('th, td').css({
            'border': '1px solid #ddd',
            'padding': '10px',
            'text-align': 'left',
        });
        
        $('.info th, .info td').css({
            'border': '3px solid transparent',
        });
        $('.info th').css({
            'color':'#3f89ca'
        });

        $('button').css({
            'margin-top': '20px',
            'padding': '10px',
            'background': 'linear-gradient(313deg, rgb(58 117 158), rgb(133 171 194), rgb(162 202 226))',
            'color': '#fff',
            'border': 'none',
            'border-radius': '4px',
            'cursor': 'pointer',
        });

        $('button:hover').css({
            'background-color': '#0056b3',
        });
    });
});