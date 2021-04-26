//
//  ViewController.swift
//  erika
//
//  Created by Erika Peña on 10/07/20.
//  Copyright © 2020 Erika Peña. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
//REFERENCIAS UI
    
    @IBOutlet weak var emailTextField: UITextField!
    
    @IBOutlet weak var passwordTextField: UITextField!
    
    
    @IBAction func loginButtonAction() {
//        obtener valores textfield
        let email = emailTextField.text
        let password = passwordTextField.text
        
        if email == "carlos@gmail.com", password == "123"{
            performSegue(withIdentifier: "home_segue", sender: nil)
        }else {
            print("credenciales inválidas")
        
    }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

