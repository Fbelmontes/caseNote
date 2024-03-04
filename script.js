  const templates = [
            { name: 'Business Template', category: 'Business' },
            { name: 'Education Template', category: 'Education' },
            { name: 'Art Template', category: 'Art' },
        ];

        const app = document.body;

        const templateList = document.createElement('ul');
        templateList.id = 'templateList';

        templates.forEach(template => {
            const templateItem = document.createElement('li');
            templateItem.className = 'template';
            templateItem.textContent = `${template.name} - ${template.category}`;
            templateItem.addEventListener('click', () => {
                alert(`Você escolheu o template: ${template.name}`);
            });

            templateList.appendChild(templateItem);
        });

        app.appendChild(templateList);
