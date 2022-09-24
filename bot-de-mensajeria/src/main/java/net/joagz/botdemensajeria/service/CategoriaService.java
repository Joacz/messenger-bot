package net.joagz.botdemensajeria.service;

import java.util.List;

import net.joagz.botdemensajeria.model.Categoria;

public interface CategoriaService {

  public List<Categoria> findAll();

  public Categoria findById(Integer id);

  public void create(Categoria cat);

  public void deleteById(Integer id);

}
