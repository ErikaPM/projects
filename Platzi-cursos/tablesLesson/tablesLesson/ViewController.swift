//
//  ViewController.swift
//  tablesLesson
//
//  Created by Erika Peña on 13/07/20.
//  Copyright © 2020 Erika Peña. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
//    REFERENCIA DE LA TABLA
    
    @IBOutlet weak var mainTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
//        TABLAS
//        1. Hacer el dataSource !! importante :
        mainTableView.dataSource = self
        mainTableView.register(UITableViewCell.self, forCellReuseIdentifier: "mi-celda")
//        2.Para interactuar con la tabla
        mainTableView.delegate = self
        
    }

}

//MARK -- UITableViewDelegate source
extension ViewController : UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("la celda fue seleccionada \(indexPath.row)")
    }
}

//MARK -- UItableDataSource source
extension ViewController : UITableViewDataSource {
//    numero de celdas de la tabla
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 20
    }
// metodo para saber que celda selecciona
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "mi-celda", for: indexPath)
        
        cell.textLabel?.text = ("Soy la celda numero \(indexPath.row)")
        
        return cell
    }
    
}
