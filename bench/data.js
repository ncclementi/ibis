window.BENCHMARK_DATA = {
  "lastUpdate": 1683457213020,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ec43b04d6199a95283deb67c91e33e2a542f7bcb",
          "message": "ci: bring back service spec to relevant backends",
          "timestamp": "2023-05-07T03:55:07-07:00",
          "tree_id": "eda480a3e693b577f31d75f1aa8def03bdca815c",
          "url": "https://github.com/ibis-project/ibis/commit/ec43b04d6199a95283deb67c91e33e2a542f7bcb"
        },
        "date": 1683457132460,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9624336864446537,
            "unit": "iter/sec",
            "range": "stddev: 0.0028189046000700897",
            "extra": "mean: 1.0390326254000115 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2225.696027065461,
            "unit": "iter/sec",
            "range": "stddev: 0.00008041570641642599",
            "extra": "mean: 449.2976524375081 usec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.592877490258944,
            "unit": "iter/sec",
            "range": "stddev: 0.00014378889731258616",
            "extra": "mean: 116.3754517777799 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3612919951974884,
            "unit": "iter/sec",
            "range": "stddev: 0.0004791760098307201",
            "extra": "mean: 734.5962537999981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.23789741564984,
            "unit": "iter/sec",
            "range": "stddev: 0.000778922617052903",
            "extra": "mean: 9.976266719296458 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.4406875277858,
            "unit": "iter/sec",
            "range": "stddev: 0.000011221677815296857",
            "extra": "mean: 1.32373066014295 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.29843233183686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003251952277504093",
            "extra": "mean: 3.6724412676065232 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.86731920127541,
            "unit": "iter/sec",
            "range": "stddev: 0.010714819368831025",
            "extra": "mean: 10.885263755319388 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.703139782006,
            "unit": "iter/sec",
            "range": "stddev: 0.00001123939887105065",
            "extra": "mean: 845.5207112955821 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6160957.182732704,
            "unit": "iter/sec",
            "range": "stddev: 8.357762896397033e-9",
            "extra": "mean: 162.31244112546048 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 214.4865974189444,
            "unit": "iter/sec",
            "range": "stddev: 0.00392774163534066",
            "extra": "mean: 4.6622959757562725 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.02667485534487,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981040563690691",
            "extra": "mean: 10.523360956513086 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.8277612478046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007478027142279686",
            "extra": "mean: 10.01725359259213 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.6383149939058,
            "unit": "iter/sec",
            "range": "stddev: 0.00026739671103156385",
            "extra": "mean: 3.6018083455878562 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.13985498578396,
            "unit": "iter/sec",
            "range": "stddev: 0.017160132531137927",
            "extra": "mean: 12.63585838234897 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.55198736102564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006595109589609745",
            "extra": "mean: 27.358293548390538 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1014943.6180011248,
            "unit": "iter/sec",
            "range": "stddev: 1.0646441695707572e-7",
            "extra": "mean: 985.2764057667011 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2231.1802137225527,
            "unit": "iter/sec",
            "range": "stddev: 0.00007937333097552871",
            "extra": "mean: 448.19328974398576 usec\nrounds: 1170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14127.1592633714,
            "unit": "iter/sec",
            "range": "stddev: 0.000001795360320258505",
            "extra": "mean: 70.78563930349245 usec\nrounds: 5628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9518166531023241,
            "unit": "iter/sec",
            "range": "stddev: 0.004439206009644907",
            "extra": "mean: 1.0506225088000178 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 233.3459899093921,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148365838273612",
            "extra": "mean: 4.2854818305996965 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.03689924734458,
            "unit": "iter/sec",
            "range": "stddev: 0.01291690134521011",
            "extra": "mean: 10.4126643804324 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7135549.69689858,
            "unit": "iter/sec",
            "range": "stddev: 4.280223689703164e-9",
            "extra": "mean: 140.14337261706797 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2169.5446029023933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008987884332322566",
            "extra": "mean: 460.9262232554292 usec\nrounds: 1075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.06477513182868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007389970604702032",
            "extra": "mean: 10.197341488375393 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.68529221339858,
            "unit": "iter/sec",
            "range": "stddev: 0.00013698558712624544",
            "extra": "mean: 7.770895824999968 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4446.696903399855,
            "unit": "iter/sec",
            "range": "stddev: 0.00002408853066034742",
            "extra": "mean: 224.8860270272571 usec\nrounds: 814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16993019887267702,
            "unit": "iter/sec",
            "range": "stddev: 0.09252119263848463",
            "extra": "mean: 5.884769197200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1785.1118898135983,
            "unit": "iter/sec",
            "range": "stddev: 0.000009319950016863898",
            "extra": "mean: 560.1889751036391 usec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.5613977568972,
            "unit": "iter/sec",
            "range": "stddev: 0.000060046509025400424",
            "extra": "mean: 6.040055312098502 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.7738685429749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008681542145350286",
            "extra": "mean: 10.124135206518881 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.2133517503297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263691879277135",
            "extra": "mean: 3.6467954372641067 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.51612812563945,
            "unit": "iter/sec",
            "range": "stddev: 0.01622226291909037",
            "extra": "mean: 11.1711712843127 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11457709.823698848,
            "unit": "iter/sec",
            "range": "stddev: 3.7122321128006534e-9",
            "extra": "mean: 87.27747651037112 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.76252662677,
            "unit": "iter/sec",
            "range": "stddev: 0.0008501523021685057",
            "extra": "mean: 40.383601200005614 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.85980933514053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006528136917709015",
            "extra": "mean: 9.817414803023894 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.23974630882311,
            "unit": "iter/sec",
            "range": "stddev: 0.00042319323028668174",
            "extra": "mean: 10.076607782612731 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.22094838740526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563362980228226",
            "extra": "mean: 9.687955939397447 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6397455956747107,
            "unit": "iter/sec",
            "range": "stddev: 0.0023606048496064473",
            "extra": "mean: 609.8507003999771 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.87891051968373,
            "unit": "iter/sec",
            "range": "stddev: 0.018209676387583234",
            "extra": "mean: 11.921947886594587 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.7186055714917,
            "unit": "iter/sec",
            "range": "stddev: 0.00006846811671437942",
            "extra": "mean: 1.8666516144856011 msec\nrounds: 428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1874002.2981761866,
            "unit": "iter/sec",
            "range": "stddev: 8.543134578156596e-8",
            "extra": "mean: 533.6172751619453 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.3672283360502,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541788980849044",
            "extra": "mean: 3.5795179196791915 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2222.2320421047893,
            "unit": "iter/sec",
            "range": "stddev: 0.00008655693985194298",
            "extra": "mean: 449.99801148256734 usec\nrounds: 2003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.73034140590536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318031279594983",
            "extra": "mean: 15.691113179998412 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1897133.5534941568,
            "unit": "iter/sec",
            "range": "stddev: 1.1781691050446865e-7",
            "extra": "mean: 527.111018704082 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2220.2710302020073,
            "unit": "iter/sec",
            "range": "stddev: 0.0001019113538703389",
            "extra": "mean: 450.3954636155465 usec\nrounds: 1223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.231307291095085,
            "unit": "iter/sec",
            "range": "stddev: 0.00030709975742964225",
            "extra": "mean: 20.312277999996947 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1613602.943339056,
            "unit": "iter/sec",
            "range": "stddev: 1.0174545038253323e-7",
            "extra": "mean: 619.7311452163584 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.00487497988385,
            "unit": "iter/sec",
            "range": "stddev: 0.000762235131467393",
            "extra": "mean: 9.999512525775884 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2142.061307953433,
            "unit": "iter/sec",
            "range": "stddev: 0.00009024105549952687",
            "extra": "mean: 466.84004621483945 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 83.89499461593951,
            "unit": "iter/sec",
            "range": "stddev: 0.0005529264339543513",
            "extra": "mean: 11.919662246572294 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.4474950812061,
            "unit": "iter/sec",
            "range": "stddev: 0.0229936609993476",
            "extra": "mean: 12.27784843478567 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.48073833016871,
            "unit": "iter/sec",
            "range": "stddev: 0.0009554078512750925",
            "extra": "mean: 24.703106742861433 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1812341.0270500833,
            "unit": "iter/sec",
            "range": "stddev: 9.594073616094202e-8",
            "extra": "mean: 551.7725334661121 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2103.1956344876967,
            "unit": "iter/sec",
            "range": "stddev: 0.00010464904183689042",
            "extra": "mean: 475.4669435416469 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.084189868616104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001350184084157576",
            "extra": "mean: 52.39939483333779 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5511820.3032729775,
            "unit": "iter/sec",
            "range": "stddev: 9.62783895165308e-9",
            "extra": "mean: 181.4282659770716 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.38491599753735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002909530774992747",
            "extra": "mean: 3.5921486493501185 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.22787929785949,
            "unit": "iter/sec",
            "range": "stddev: 0.00005522550039273597",
            "extra": "mean: 8.910441917430697 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2161.7752616189127,
            "unit": "iter/sec",
            "range": "stddev: 0.00008601467170793188",
            "extra": "mean: 462.58277525625806 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 319.9522188239285,
            "unit": "iter/sec",
            "range": "stddev: 0.000030683319284970246",
            "extra": "mean: 3.125466682730854 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7831668017261916,
            "unit": "iter/sec",
            "range": "stddev: 0.002803623400391406",
            "extra": "mean: 1.2768671983999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.98333954184365,
            "unit": "iter/sec",
            "range": "stddev: 0.0008263984615225321",
            "extra": "mean: 10.102710260419792 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.19028222339652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006685434554373442",
            "extra": "mean: 9.882371884212287 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.41036085447085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007554190467295894",
            "extra": "mean: 9.48673348515139 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.43398570133775,
            "unit": "iter/sec",
            "range": "stddev: 0.00029187464809239254",
            "extra": "mean: 3.591515588447777 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6053317.496194746,
            "unit": "iter/sec",
            "range": "stddev: 1.032927962882471e-8",
            "extra": "mean: 165.19867008921523 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.24265122510977,
            "unit": "iter/sec",
            "range": "stddev: 0.0004963175445591017",
            "extra": "mean: 4.01215440088071 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8523.941350179795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000338586618351863",
            "extra": "mean: 117.31662137479478 usec\nrounds: 4379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.38175808028754,
            "unit": "iter/sec",
            "range": "stddev: 0.000045610336443340613",
            "extra": "mean: 5.637558285713768 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147567.12586888118,
            "unit": "iter/sec",
            "range": "stddev: 2.8995985521342736e-7",
            "extra": "mean: 6.776577060181661 usec\nrounds: 43479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.18645840426417,
            "unit": "iter/sec",
            "range": "stddev: 0.00017294518666363475",
            "extra": "mean: 9.506927176468762 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4517602.265339032,
            "unit": "iter/sec",
            "range": "stddev: 1.2084322396297936e-8",
            "extra": "mean: 221.35636146428146 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12378.689235826094,
            "unit": "iter/sec",
            "range": "stddev: 0.00004905725721726421",
            "extra": "mean: 80.78399747736013 usec\nrounds: 3568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.68796505096495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603930332102911",
            "extra": "mean: 9.461815255102879 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.89226766695252,
            "unit": "iter/sec",
            "range": "stddev: 0.022906117056072782",
            "extra": "mean: 12.838244795693265 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 193.2926677392031,
            "unit": "iter/sec",
            "range": "stddev: 0.00004499546489804519",
            "extra": "mean: 5.173501983785713 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.66303166799364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024000969762355658",
            "extra": "mean: 4.958767066669623 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2134.665845350009,
            "unit": "iter/sec",
            "range": "stddev: 0.00008655593577634895",
            "extra": "mean: 468.4573944808845 usec\nrounds: 1232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.1601712953517,
            "unit": "iter/sec",
            "range": "stddev: 0.003617816908050967",
            "extra": "mean: 5.808544406501761 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 166.3484161280455,
            "unit": "iter/sec",
            "range": "stddev: 0.00007306570538358561",
            "extra": "mean: 6.011478938460449 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.115049729084422,
            "unit": "iter/sec",
            "range": "stddev: 0.00019460654769651065",
            "extra": "mean: 33.20598866666399 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 694.0386538572174,
            "unit": "iter/sec",
            "range": "stddev: 0.000022779372236167037",
            "extra": "mean: 1.440841939339199 msec\nrounds: 577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.14240568241883,
            "unit": "iter/sec",
            "range": "stddev: 0.00007706731129570793",
            "extra": "mean: 9.510910402987031 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5824000297310605,
            "unit": "iter/sec",
            "range": "stddev: 0.0015841310967890975",
            "extra": "mean: 387.23667460000115 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.3446152884644,
            "unit": "iter/sec",
            "range": "stddev: 0.00025590717621306675",
            "extra": "mean: 3.685350449784705 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.6469157409032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000309572947572051",
            "extra": "mean: 2.3220879180791476 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10498.134528150173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020246314092167273",
            "extra": "mean: 95.25501862436175 usec\nrounds: 5584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.123338586026804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002941652793948833",
            "extra": "mean: 18.824118111112714 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.62480955595342,
            "unit": "iter/sec",
            "range": "stddev: 0.0006248162973991739",
            "extra": "mean: 17.97758963999854 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.41321655203282,
            "unit": "iter/sec",
            "range": "stddev: 0.034626908849801526",
            "extra": "mean: 28.23804492683388 msec\nrounds: 41"
          }
        ]
      }
    ]
  }
}