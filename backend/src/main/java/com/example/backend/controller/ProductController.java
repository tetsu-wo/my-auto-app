package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = {"http://localhost:3000", "https://my-auto-app.vercel.app"}) // フロントエンドのURLに合わせて許可
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // 商品一覧を取得するAPI
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // 商品を追加するAPI
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}
