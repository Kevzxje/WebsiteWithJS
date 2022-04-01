var customers;
                setInterval(function () {
                    customers = JSON.parse(localStorage.getItem('customers')) || [];
                }, 1000);

                function addCustomer() {
                    var nameCus = document.getElementById('nameCustomer').value;
                    var ageCus = document.getElementById('ageCustomer').value;

                    customers.push({
                        name: nameCus,
                        age: ageCus
                    });
                    localStorage.setItem('customers', JSON.stringify(customers));
                }

                document.getElementById('addCustomer').addEventListener('click', addCustomer);

                document.getElementById('clearStorage').addEventListener('click', function () {
                    localStorage.removeItem('customers');
                })