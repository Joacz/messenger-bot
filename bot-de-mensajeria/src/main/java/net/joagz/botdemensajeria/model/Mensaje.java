package net.joagz.botdemensajeria.model;

import net.joagz.botdemensajeria.model.Categoria;

public class Mensaje {

  private Integer id;
  private String contenido;
  private Categoria categoria;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getContenido() {
    return contenido;
  }

  public void setContenido(String contenido) {
    this.contenido = contenido;
  }

  public Categoria getCategoria() {
    return categoria;
  }

  public void setCategoria(Categoria categoria) {
    this.categoria = categoria;
  }

}
