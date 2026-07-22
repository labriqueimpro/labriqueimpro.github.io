const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate(
                [
                    {
                        opacity:0,
                        transform:'translateY(50px)'
                    },

                    {
                        opacity:1,
                        transform:'translateY(0)'
                    }

                ],

                {
                    duration:800,
                    fill:'forwards'
                }
            );

        }

    });

});

document
.querySelectorAll('section')
.forEach(section => observer.observe(section));
