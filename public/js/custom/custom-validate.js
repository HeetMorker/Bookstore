/*
--------------------------------
    : Custom - Validate js :
--------------------------------
*/
"use strict";
$(document).ready(function() {
    jQuery(".form-validate").validate({
        ignore: [],
        errorClass: "invalid-feedback animated fadeInDown",
        errorElement: "div",
        errorPlacement: function(e, a) {
            jQuery(a).parents(".form-group > div").append(e)
        },
        highlight: function(e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
        },
        success: function(e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
        },
        rules: {
            "val-username": {
                required: !0,
                minlength: 3
            },
            "title": {
                required: !0,
                // minlength: 3
            },
            "author": {
                required: !0,
                // minlength: 3
            },
            "val-email": {
                required: !0,
                email: !0
            },
            "val-password": {
                required: !0,
                minlength: 5
            },
            "val-confirm-password": {
                required: !0,
                equalTo: "#val-password"
            },
            "val-select2": {
                required: !0
            },
            "val-select2-multiple": {
                required: !0,
                minlength: 2
            },
            "val-suggestions": {
                required: !0,
                minlength: 5
            },
            "val-skill": {
                required: !0
            },
            "book_type": {
                required: !0
            },
            "val_currency": {
                required: !0,
                digits: true 
            },
            "stock": {
                required: !0,
                digits: true 
            },
            "val-website": {
                required: !0,
                url: !0
            },
            "val-phoneus": {
                required: !0
            },
            "val-digits": {
                required: !0,
                digits: !0
            },
            "val-number": {
                required: !0
            },
            "val-range": {
                required: !0,
                range: [1, 1000]
            },
            "val-terms": {
                required: !0
            }
        },
        messages: {
            // "val-username": {
            //     required: "Please enter a username",
            //     minlength: "Your username must consist of at least 3 characters"
            // },
            "title": {
                required: "Please Give Suitable Title",
                // minlength: "Your username must consist of at least 3 characters"
            },
            "author": {
                required: "Please Give Author Name",
                // minlength: "Your username must consist of at least 3 characters"
            },
            // "val-email": "Please enter a valid email address",
            // "val-password": {
            //     required: "Please provide a password",
            //     minlength: "Your password must be at least 5 characters long"
            // },
            "val_currency": {
                required: "Please Enter the price",
                digits: "currency should be in digits"
            },
            "stock": {
                required: "Please Enter the quantity of book",
                digits: "Stock should be in digits"
            },
            // "val-confirm-password": {
            //     required: "Please provide a password",
            //     minlength: "Your password must be at least 5 characters long",
            //     equalTo: "Please enter the same password as above"
            // },

            "book_type": "Please select a Book Type!",
            // "val-select2": "Please select a value!",
            // "val-select2-multiple": "Please select at least 2 values!",
            // "val-suggestions": "What can we do to become better?",
            "val-skill": "Please select a skill!",
            // "val-website": "Please enter your website!",
            // "val-phoneus": "Please enter a US phone!",
            // "val-digits": "Please enter only digits!",
            // "val-number": "Please enter a number!",
            "val-range": "Please enter a number between 1 and 5!",
            // "val-terms": "You must agree to the service terms!"
        }
    })   
});