package net.joagz.botdemensajeria.service;

import java.util.List;

import net.joagz.botdemensajeria.model.Categoria;
import net.joagz.botdemensajeria.model.Mensaje;

public interface MensajeService {

  public List<Mensaje> findAll();

  public Categoria findById(Integer id);

  public void create(Mensaje cat);

  public void deleteById(Integer id);

}
