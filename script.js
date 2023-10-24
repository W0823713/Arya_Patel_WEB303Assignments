$(document).ready(function () {
    class ContentItem {
        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (id === this.id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }

        toString() {
            const contentItemHtml = `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
            `;
            return contentItemHtml;
        }
    }

    const contentItems = [
        new ContentItem(0, "Sedan", "A sleek and stylish sedan for urban driving.", "Compact Cars"),
        new ContentItem(1, "SUV", "A rugged and versatile SUV for outdoor adventures.", "Sport Utility Vehicles"),
        new ContentItem(2, "Sports Car", "A high-performance sports car built for speed.", "Sports Cars"),
        new ContentItem(3, "Truck", "A powerful and capable truck for heavy-duty tasks.", "Pickup Trucks"),
        new ContentItem(4, "Convertible", "A convertible car that lets you enjoy the open road.", "Convertible Cars"),
    ];

    function updateContentItemOnPage(itemIndex) {
        const updatedItem = contentItems[itemIndex];
        const itemWrapper = $(`#content-item-${updatedItem.id}`);
        itemWrapper.find('h2').text(updatedItem.name);
        itemWrapper.find('p').text(updatedItem.description);
        itemWrapper.find('div').text(updatedItem.category);
    }

    const contentItemList = $('#content-item-list');
    
    contentItems.forEach(item => {
        contentItemList.append(item.toString());

        const itemWrapper = $(`#content-item-${item.id}`);
        itemWrapper.css({
            border: '1px solid #000',
            width: '300px',
            padding: '10px',
            margin: '10px auto',
        });
    });

    const themeName = "Your Chosen Theme";
    $('#theme-name').text(themeName);

    $('#update-success').click(function () {
        contentItems[0].updateContentItem(0, "New Name", "New Description", "New Category");
        updateContentItemOnPage(0);
    });

    $('#update-fail').click(function () {
        contentItems[1].updateContentItem(0, "New Name", null, "New Category");
    });
});
