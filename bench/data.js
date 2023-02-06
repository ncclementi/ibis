window.BENCHMARK_DATA = {
  "lastUpdate": 1675698553960,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "6812c1713687a9e321f75c87be870d57a018c817",
          "message": "docs: array expression examples",
          "timestamp": "2023-02-06T16:43:56+01:00",
          "tree_id": "a6e364c7dd11d0ff83b20d01423b20f8a4071d5e",
          "url": "https://github.com/ibis-project/ibis/commit/6812c1713687a9e321f75c87be870d57a018c817"
        },
        "date": 1675698480033,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1551767.150770972,
            "unit": "iter/sec",
            "range": "stddev: 1.770457486488955e-7",
            "extra": "mean: 644.426581335457 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13565258675581407,
            "unit": "iter/sec",
            "range": "stddev: 0.09482857591165685",
            "extra": "mean: 7.371772436599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 414.01101268270475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709547235458465",
            "extra": "mean: 2.4153946860500377 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.11576976089225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001284394211297634",
            "extra": "mean: 6.938865896904527 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.3971409058929,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294907521882356",
            "extra": "mean: 11.709993910709418 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4569888.0121679595,
            "unit": "iter/sec",
            "range": "stddev: 1.204596177836183e-8",
            "extra": "mean: 218.82374301883263 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.37873125532047,
            "unit": "iter/sec",
            "range": "stddev: 0.01424570696103464",
            "extra": "mean: 8.447463403228994 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8072635784013628,
            "unit": "iter/sec",
            "range": "stddev: 0.013697185499102172",
            "extra": "mean: 1.2387527775999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58476.90967093604,
            "unit": "iter/sec",
            "range": "stddev: 5.587726737930917e-7",
            "extra": "mean: 17.10076687751193 usec\nrounds: 10917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.02650550269279,
            "unit": "iter/sec",
            "range": "stddev: 0.01786895411049534",
            "extra": "mean: 15.378344449996462 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10763.396814559514,
            "unit": "iter/sec",
            "range": "stddev: 0.000001826152380379704",
            "extra": "mean: 92.90747309876306 usec\nrounds: 2788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.89896689646314,
            "unit": "iter/sec",
            "range": "stddev: 0.0019674283828605703",
            "extra": "mean: 28.654143343748828 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 137.99908069217915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787782360511436",
            "extra": "mean: 7.246425084748213 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.26140149740226,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004941417888765",
            "extra": "mean: 4.060725691965773 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.942689984132543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740982107865789",
            "extra": "mean: 202.318980799987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.11089905595662,
            "unit": "iter/sec",
            "range": "stddev: 0.000748588086859141",
            "extra": "mean: 11.612931823533506 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.37156763799396,
            "unit": "iter/sec",
            "range": "stddev: 0.00025913675594471935",
            "extra": "mean: 4.303452484160522 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 131.05475524818854,
            "unit": "iter/sec",
            "range": "stddev: 0.01398995207311045",
            "extra": "mean: 7.630398439997256 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 957.7143835820285,
            "unit": "iter/sec",
            "range": "stddev: 0.00006306510714825012",
            "extra": "mean: 1.044152637929291 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.04042251555734,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492669545039761",
            "extra": "mean: 4.047920537931501 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.9022183912743,
            "unit": "iter/sec",
            "range": "stddev: 0.0002649737230695546",
            "extra": "mean: 4.116882944186083 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.7641653892415,
            "unit": "iter/sec",
            "range": "stddev: 0.000890338733339021",
            "extra": "mean: 29.617198840005585 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.27846151093891,
            "unit": "iter/sec",
            "range": "stddev: 0.0009697420545411101",
            "extra": "mean: 11.457580515149967 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.83782524351156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325456818277935",
            "extra": "mean: 11.64987576471236 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.35622507331554,
            "unit": "iter/sec",
            "range": "stddev: 0.000412013704324769",
            "extra": "mean: 8.521064812499494 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.1880022280155,
            "unit": "iter/sec",
            "range": "stddev: 0.00028441843120259835",
            "extra": "mean: 6.983825351565276 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5430.899778600003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004993953727864465",
            "extra": "mean: 184.1315510811698 usec\nrounds: 1664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4196863.393504975,
            "unit": "iter/sec",
            "range": "stddev: 1.347602348967682e-8",
            "extra": "mean: 238.27318314647093 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.309294904475273,
            "unit": "iter/sec",
            "range": "stddev: 0.0010357570053702223",
            "extra": "mean: 44.824365999993965 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8061254176335151,
            "unit": "iter/sec",
            "range": "stddev: 0.01724193379077029",
            "extra": "mean: 1.2405017607999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.302685985593676,
            "unit": "iter/sec",
            "range": "stddev: 0.000608683483179285",
            "extra": "mean: 19.87965414583215 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.61786504429284,
            "unit": "iter/sec",
            "range": "stddev: 0.0004046483151522598",
            "extra": "mean: 12.883631873014638 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 571.8638096659733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015226023049087873",
            "extra": "mean: 1.7486680973641289 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1559352.4877385774,
            "unit": "iter/sec",
            "range": "stddev: 1.1263850059407865e-7",
            "extra": "mean: 641.2918232812337 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 260.030382922383,
            "unit": "iter/sec",
            "range": "stddev: 0.00019424779681693376",
            "extra": "mean: 3.8457044471549007 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.15426362640298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008855744569804308",
            "extra": "mean: 11.092098806818223 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.627334947355896,
            "unit": "iter/sec",
            "range": "stddev: 0.00013844962645149004",
            "extra": "mean: 73.38191978571932 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 151.53778537747047,
            "unit": "iter/sec",
            "range": "stddev: 0.0008626894542540856",
            "extra": "mean: 6.59901421621721 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.44407341809525,
            "unit": "iter/sec",
            "range": "stddev: 0.0007840584629601301",
            "extra": "mean: 26.706496081079127 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1420.579546707274,
            "unit": "iter/sec",
            "range": "stddev: 0.00003528292196217465",
            "extra": "mean: 703.9380528305333 usec\nrounds: 1060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5463386.646805415,
            "unit": "iter/sec",
            "range": "stddev: 5.120554329639142e-9",
            "extra": "mean: 183.03665192449066 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 605926.0657884899,
            "unit": "iter/sec",
            "range": "stddev: 3.4633034152080003e-7",
            "extra": "mean: 1.6503663672212265 usec\nrounds: 20040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7281718521630209,
            "unit": "iter/sec",
            "range": "stddev: 0.0019087734773879492",
            "extra": "mean: 1.3733021909999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4553.40881803933,
            "unit": "iter/sec",
            "range": "stddev: 0.00006475228853083688",
            "extra": "mean: 219.6156857337914 usec\nrounds: 1521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9845.8767286519,
            "unit": "iter/sec",
            "range": "stddev: 0.000014992089010821381",
            "extra": "mean: 101.56535853124785 usec\nrounds: 4220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 151.21299967446677,
            "unit": "iter/sec",
            "range": "stddev: 0.000910418848489686",
            "extra": "mean: 6.613188033785537 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4530.69482672101,
            "unit": "iter/sec",
            "range": "stddev: 0.000052699840983681346",
            "extra": "mean: 220.71669760281068 usec\nrounds: 1584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 398204.43671935453,
            "unit": "iter/sec",
            "range": "stddev: 4.0481946823372876e-7",
            "extra": "mean: 2.511272873397886 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.6811789880231,
            "unit": "iter/sec",
            "range": "stddev: 0.00017306798378529563",
            "extra": "mean: 16.755701160003582 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5228.240790946061,
            "unit": "iter/sec",
            "range": "stddev: 0.00005180787085394633",
            "extra": "mean: 191.26892581759762 usec\nrounds: 2049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.6105960396378,
            "unit": "iter/sec",
            "range": "stddev: 0.0002111074504408455",
            "extra": "mean: 7.37405504587347 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5325.591740754533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005159420557068063",
            "extra": "mean: 187.7725609996382 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.59186604217345,
            "unit": "iter/sec",
            "range": "stddev: 0.0002651964995660393",
            "extra": "mean: 4.088443398308169 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 147.7007986753523,
            "unit": "iter/sec",
            "range": "stddev: 0.0010107359174995518",
            "extra": "mean: 6.770444093521857 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10802345.575732725,
            "unit": "iter/sec",
            "range": "stddev: 3.733858270992432e-9",
            "extra": "mean: 92.57248742785285 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.0019175609967,
            "unit": "iter/sec",
            "range": "stddev: 0.00002927936357694433",
            "extra": "mean: 1.9304947840897637 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.74130766454823,
            "unit": "iter/sec",
            "range": "stddev: 0.00013430293464054038",
            "extra": "mean: 3.76305817408833 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.973432788269449,
            "unit": "iter/sec",
            "range": "stddev: 0.0002735737751436275",
            "extra": "mean: 111.44007244443326 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4674.513128752446,
            "unit": "iter/sec",
            "range": "stddev: 0.000054988741209355824",
            "extra": "mean: 213.92602233783524 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.531967715863864,
            "unit": "iter/sec",
            "range": "stddev: 0.0014185772093251363",
            "extra": "mean: 652.7552700000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.4117614003201,
            "unit": "iter/sec",
            "range": "stddev: 0.00010563349505466365",
            "extra": "mean: 3.76773054337898 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.89621856520571,
            "unit": "iter/sec",
            "range": "stddev: 0.0008571550190425369",
            "extra": "mean: 11.779087654321566 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.2568118203258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000845552458462561",
            "extra": "mean: 14.650552425922358 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18977.589005775088,
            "unit": "iter/sec",
            "range": "stddev: 0.000013086096358012455",
            "extra": "mean: 52.693732575602155 usec\nrounds: 5280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.16342084318367,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648919067386245",
            "extra": "mean: 10.96931193181273 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.36697585329239,
            "unit": "iter/sec",
            "range": "stddev: 0.0007442497755154197",
            "extra": "mean: 27.49747474285706 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.99556780646306,
            "unit": "iter/sec",
            "range": "stddev: 0.00017148333945451853",
            "extra": "mean: 9.804347595745567 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.0860037437051,
            "unit": "iter/sec",
            "range": "stddev: 0.000059707607423247595",
            "extra": "mean: 5.914150064814155 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.09347601309308,
            "unit": "iter/sec",
            "range": "stddev: 0.001689069542931455",
            "extra": "mean: 20.369305276597302 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.88749108690394,
            "unit": "iter/sec",
            "range": "stddev: 0.000015115354985946884",
            "extra": "mean: 3.803908644970199 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.39143832105547,
            "unit": "iter/sec",
            "range": "stddev: 0.02054271683597274",
            "extra": "mean: 8.897474887218873 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1752023.3605992985,
            "unit": "iter/sec",
            "range": "stddev: 1.530594103890679e-7",
            "extra": "mean: 570.7686452639189 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4036.8506405913135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005243001716364665",
            "extra": "mean: 247.71785954744195 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.58165657443698,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876726958633136",
            "extra": "mean: 11.289018953485924 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1519897.3781715084,
            "unit": "iter/sec",
            "range": "stddev: 1.0319429178909008e-7",
            "extra": "mean: 657.9391571837806 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5790384279920524,
            "unit": "iter/sec",
            "range": "stddev: 0.005308652333928165",
            "extra": "mean: 1.727001096399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10916.64906089111,
            "unit": "iter/sec",
            "range": "stddev: 0.000001998888240302114",
            "extra": "mean: 91.60320116751757 usec\nrounds: 4285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2525094167878765,
            "unit": "iter/sec",
            "range": "stddev: 0.003536199892691697",
            "extra": "mean: 443.9493094000113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 206.58862528837312,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405491897180591",
            "extra": "mean: 4.840537559142567 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 230.16388512558092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003954777437000359",
            "extra": "mean: 4.34473027536177 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120696.8939382163,
            "unit": "iter/sec",
            "range": "stddev: 3.78676224168287e-7",
            "extra": "mean: 8.285217352087715 usec\nrounds: 33333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5223.435411613336,
            "unit": "iter/sec",
            "range": "stddev: 0.00007615090121934642",
            "extra": "mean: 191.44488659258352 usec\nrounds: 2081"
          }
        ]
      }
    ]
  }
}