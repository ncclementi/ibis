window.BENCHMARK_DATA = {
  "lastUpdate": 1681428308447,
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
          "id": "736fe26275b7bce00cbbcbd8f7e7a16acffc3b07",
          "message": "refactor(deps): remove optional dependency on clickhouse-cityhash and lz4\n\nBREAKING CHANGE: New environments will have a different default setting for `compression` in the ClickHouse backend due to removal of optional dependencies. Ibis is still capable of using the optional dependencies but doesn't include them by default. Install `clickhouse-cityhash` and `lz4` to preserve the previous behavior.",
          "timestamp": "2023-04-13T19:02:19-04:00",
          "tree_id": "25309410a106f7b47f5bf69b601e110013f0728d",
          "url": "https://github.com/ibis-project/ibis/commit/736fe26275b7bce00cbbcbd8f7e7a16acffc3b07"
        },
        "date": 1681427366539,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.1558743747887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619458328939844",
            "extra": "mean: 1.8343377500001234 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 193.57743520174344,
            "unit": "iter/sec",
            "range": "stddev: 0.012937813963899118",
            "extra": "mean: 5.165891360001827 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10228.079212388553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035292161119563694",
            "extra": "mean: 97.77006798977176 usec\nrounds: 4383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.9449781967344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002573513570371264",
            "extra": "mean: 3.52180907142911 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.66506037062237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006144462734876576",
            "extra": "mean: 9.83622098245431 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.1829213987053,
            "unit": "iter/sec",
            "range": "stddev: 0.00012263632018020347",
            "extra": "mean: 13.300893093750155 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.99754961089442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783604297693649",
            "extra": "mean: 9.80415709803669 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.52028748548804,
            "unit": "iter/sec",
            "range": "stddev: 0.000050378228149028144",
            "extra": "mean: 9.048112547945607 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14110.624204596603,
            "unit": "iter/sec",
            "range": "stddev: 0.000001504900908251092",
            "extra": "mean: 70.86858706606652 usec\nrounds: 3170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.24704932829684,
            "unit": "iter/sec",
            "range": "stddev: 0.0014223324684623252",
            "extra": "mean: 17.46814921875295 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1170.912670321878,
            "unit": "iter/sec",
            "range": "stddev: 0.0074901180685380975",
            "extra": "mean: 854.0346563378675 usec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.36592768165913,
            "unit": "iter/sec",
            "range": "stddev: 0.00009285453896065356",
            "extra": "mean: 8.307998943395141 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.95705860448095,
            "unit": "iter/sec",
            "range": "stddev: 0.00046291480250244387",
            "extra": "mean: 11.499928999995745 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1810343.5633685794,
            "unit": "iter/sec",
            "range": "stddev: 1.0025069860782554e-7",
            "extra": "mean: 552.381338125267 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4519.967499457928,
            "unit": "iter/sec",
            "range": "stddev: 0.00004023747689680474",
            "extra": "mean: 221.24052885776905 usec\nrounds: 849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.10606819804366,
            "unit": "iter/sec",
            "range": "stddev: 0.0009391981844685663",
            "extra": "mean: 10.193049404256332 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 75.239885344684,
            "unit": "iter/sec",
            "range": "stddev: 0.00019380582342546363",
            "extra": "mean: 13.290823017856367 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6109332.985614882,
            "unit": "iter/sec",
            "range": "stddev: 8.706367884618026e-9",
            "extra": "mean: 163.68399011049456 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1793681.9027790942,
            "unit": "iter/sec",
            "range": "stddev: 1.2954160209340902e-7",
            "extra": "mean: 557.512454382586 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.97721754013384,
            "unit": "iter/sec",
            "range": "stddev: 0.0010594963073702597",
            "extra": "mean: 11.497263631577669 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8572118560844894,
            "unit": "iter/sec",
            "range": "stddev: 0.0032770014064586912",
            "extra": "mean: 1.1665727590000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.76907280003496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574275395119955",
            "extra": "mean: 3.5616458395052812 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.26407196915585,
            "unit": "iter/sec",
            "range": "stddev: 0.000045034789854257746",
            "extra": "mean: 3.493278053096887 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.92335848823991,
            "unit": "iter/sec",
            "range": "stddev: 0.000743731900481165",
            "extra": "mean: 10.10883592391256 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 765725.5358775725,
            "unit": "iter/sec",
            "range": "stddev: 4.910417834296292e-7",
            "extra": "mean: 1.3059509617293008 usec\nrounds: 22676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2159.167037045881,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225881209250155",
            "extra": "mean: 463.14156470644133 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2049.5001195122277,
            "unit": "iter/sec",
            "range": "stddev: 0.00011065588080698135",
            "extra": "mean: 487.92385542187515 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.29578821705746,
            "unit": "iter/sec",
            "range": "stddev: 0.0022921387201039994",
            "extra": "mean: 65.37747423077069 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.3833847775695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007570896964253128",
            "extra": "mean: 852.2363730159374 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5401767.674458317,
            "unit": "iter/sec",
            "range": "stddev: 8.980673399011813e-9",
            "extra": "mean: 185.1245851852186 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 289.99593695651936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441777868188885",
            "extra": "mean: 3.44832417479675 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1746792.0201984167,
            "unit": "iter/sec",
            "range": "stddev: 1.7140663492513544e-7",
            "extra": "mean: 572.4779987753842 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.15259200969192,
            "unit": "iter/sec",
            "range": "stddev: 0.000810074760156083",
            "extra": "mean: 10.400135650001019 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.79441639137468,
            "unit": "iter/sec",
            "range": "stddev: 0.00018337370316202572",
            "extra": "mean: 9.8237215306117 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.695296629543719,
            "unit": "iter/sec",
            "range": "stddev: 0.08486636259450057",
            "extra": "mean: 1.4382350748000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.47106299901637,
            "unit": "iter/sec",
            "range": "stddev: 0.000029940547148103647",
            "extra": "mean: 5.0640331034475725 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491890.70297755825,
            "unit": "iter/sec",
            "range": "stddev: 1.7804788284541906e-7",
            "extra": "mean: 2.0329719467082987 usec\nrounds: 1818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.41512678732604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004000442137892922",
            "extra": "mean: 40.95821450000017 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2175.893262234305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000832881235601273",
            "extra": "mean: 459.5813670442432 usec\nrounds: 1147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.12311093749799,
            "unit": "iter/sec",
            "range": "stddev: 0.0008175030279968158",
            "extra": "mean: 23.18942159459195 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17056149958782776,
            "unit": "iter/sec",
            "range": "stddev: 0.17703201382933068",
            "extra": "mean: 5.862987851399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2099.0775975252013,
            "unit": "iter/sec",
            "range": "stddev: 0.00008606777786349868",
            "extra": "mean: 476.39972966173013 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.37296530535417,
            "unit": "iter/sec",
            "range": "stddev: 0.00005177485836195977",
            "extra": "mean: 3.340314977940713 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 245.8379272275446,
            "unit": "iter/sec",
            "range": "stddev: 0.0005147098280561984",
            "extra": "mean: 4.067720596563654 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.829266184698284,
            "unit": "iter/sec",
            "range": "stddev: 0.00047450910032704655",
            "extra": "mean: 21.35416762790862 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.15741062058805,
            "unit": "iter/sec",
            "range": "stddev: 0.00011059986980068413",
            "extra": "mean: 6.363047062503568 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11147953.48721603,
            "unit": "iter/sec",
            "range": "stddev: 3.8935461430475445e-9",
            "extra": "mean: 89.70256299932456 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.81894143760872,
            "unit": "iter/sec",
            "range": "stddev: 0.00019241207719386633",
            "extra": "mean: 171.85256300000637 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.9987522271516,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853123739692375",
            "extra": "mean: 10.638439088887708 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.7588646929927,
            "unit": "iter/sec",
            "range": "stddev: 0.0003228400288125075",
            "extra": "mean: 3.600245130269025 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.218106704650197,
            "unit": "iter/sec",
            "range": "stddev: 0.00036222616223169487",
            "extra": "mean: 89.14160172727489 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.602184101903174,
            "unit": "iter/sec",
            "range": "stddev: 0.0022075505805517646",
            "extra": "mean: 384.29256380001107 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.14782563354688,
            "unit": "iter/sec",
            "range": "stddev: 0.00029939006852316025",
            "extra": "mean: 18.133081196073338 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.28762495622769,
            "unit": "iter/sec",
            "range": "stddev: 0.00008484078449567297",
            "extra": "mean: 8.985725056072729 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2680744.7510427786,
            "unit": "iter/sec",
            "range": "stddev: 1.8255003131854527e-8",
            "extra": "mean: 373.03066605331907 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.54026086952868,
            "unit": "iter/sec",
            "range": "stddev: 0.003959163289651547",
            "extra": "mean: 6.190407237287246 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.12508295679642,
            "unit": "iter/sec",
            "range": "stddev: 0.000885154888401509",
            "extra": "mean: 10.191074186814099 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.65684010814135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552148279444702",
            "extra": "mean: 3.6676138387116177 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.6040955140406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988583891107676",
            "extra": "mean: 6.112316423730232 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2203.38235539455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132593616397086",
            "extra": "mean: 453.8476935479201 usec\nrounds: 1178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9293721885939487,
            "unit": "iter/sec",
            "range": "stddev: 0.005303977714975083",
            "extra": "mean: 1.0759951849999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.38829435409607,
            "unit": "iter/sec",
            "range": "stddev: 0.0010818894195440834",
            "extra": "mean: 26.049607486488885 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.69573185942156,
            "unit": "iter/sec",
            "range": "stddev: 0.004208346483353151",
            "extra": "mean: 4.189433938387068 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 73.32434822142666,
            "unit": "iter/sec",
            "range": "stddev: 0.02920426344494859",
            "extra": "mean: 13.638034626372342 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8517.252895625901,
            "unit": "iter/sec",
            "range": "stddev: 0.000011698112418133933",
            "extra": "mean: 117.40874813210695 usec\nrounds: 3212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75603.29852107614,
            "unit": "iter/sec",
            "range": "stddev: 5.347201223187752e-7",
            "extra": "mean: 13.226936120005758 usec\nrounds: 12821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.90136388338331,
            "unit": "iter/sec",
            "range": "stddev: 0.000865900731388263",
            "extra": "mean: 10.111084020834346 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12074.255477006645,
            "unit": "iter/sec",
            "range": "stddev: 0.000018297616593527167",
            "extra": "mean: 82.82084157522831 usec\nrounds: 5359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.09079297562943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007677151529059788",
            "extra": "mean: 10.406824306815952 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.79490192380824,
            "unit": "iter/sec",
            "range": "stddev: 0.00020456782757710183",
            "extra": "mean: 10.22548190476327 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.50357851492026,
            "unit": "iter/sec",
            "range": "stddev: 0.00003793358168331522",
            "extra": "mean: 7.604355799994759 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1793.9078828146603,
            "unit": "iter/sec",
            "range": "stddev: 0.000006307464483530289",
            "extra": "mean: 557.4422240851017 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2192.423311783343,
            "unit": "iter/sec",
            "range": "stddev: 0.00008089662944654688",
            "extra": "mean: 456.1162958929625 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.56193725020607,
            "unit": "iter/sec",
            "range": "stddev: 0.000838934167428084",
            "extra": "mean: 10.464417411105211 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146985.85538561214,
            "unit": "iter/sec",
            "range": "stddev: 3.674102237624215e-7",
            "extra": "mean: 6.803375721946413 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.67533110950092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638204166352404",
            "extra": "mean: 22.896220236839024 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.45463212397212,
            "unit": "iter/sec",
            "range": "stddev: 0.0009836237950737303",
            "extra": "mean: 10.261184904252671 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.58491073661475,
            "unit": "iter/sec",
            "range": "stddev: 0.0011373636066512182",
            "extra": "mean: 10.800896086024178 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.9915725682343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003518610227639774",
            "extra": "mean: 3.571536067416096 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.2900947904983,
            "unit": "iter/sec",
            "range": "stddev: 0.000027316535443376087",
            "extra": "mean: 1.4742954492190652 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 741.9641875234623,
            "unit": "iter/sec",
            "range": "stddev: 0.000014387182612045612",
            "extra": "mean: 1.3477739449094073 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.47282556133062,
            "unit": "iter/sec",
            "range": "stddev: 0.000834120867687594",
            "extra": "mean: 10.365613261366232 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.4150460761307,
            "unit": "iter/sec",
            "range": "stddev: 0.000978672609333857",
            "extra": "mean: 10.161047927838517 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.9493906985919,
            "unit": "iter/sec",
            "range": "stddev: 0.00020407832326138137",
            "extra": "mean: 6.099443222929822 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7142450.510621805,
            "unit": "iter/sec",
            "range": "stddev: 4.290215457352344e-9",
            "extra": "mean: 140.0079704456147 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.931509802788123,
            "unit": "iter/sec",
            "range": "stddev: 0.006049354565307794",
            "extra": "mean: 1.0735260079999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7782919573822094,
            "unit": "iter/sec",
            "range": "stddev: 0.0012221200128226793",
            "extra": "mean: 562.3373574000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2119.5240307020504,
            "unit": "iter/sec",
            "range": "stddev: 0.00009035152644326983",
            "extra": "mean: 471.80403973469924 usec\nrounds: 1208"
          }
        ]
      },
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
          "id": "b2b229bbe75193cf4b65d3bad6f396b70611b685",
          "message": "fix(duckdb): fix check for literal maps",
          "timestamp": "2023-04-13T19:04:08-04:00",
          "tree_id": "9f8313ae02403d90662fdcec3ca9e83e6f165e23",
          "url": "https://github.com/ibis-project/ibis/commit/b2b229bbe75193cf4b65d3bad6f396b70611b685"
        },
        "date": 1681428095565,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.21479430997601,
            "unit": "iter/sec",
            "range": "stddev: 0.011167299321666983",
            "extra": "mean: 11.59893737500095 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.192496888709854,
            "unit": "iter/sec",
            "range": "stddev: 0.0004318457684838422",
            "extra": "mean: 89.3455687272716 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.54922431987756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007422118571251879",
            "extra": "mean: 40.73448460000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.32797199523776,
            "unit": "iter/sec",
            "range": "stddev: 0.00032878896970367353",
            "extra": "mean: 3.5928835784321027 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.7697430624876,
            "unit": "iter/sec",
            "range": "stddev: 0.0007711575770860788",
            "extra": "mean: 10.33380856818298 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.31651386793374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003770601459188825",
            "extra": "mean: 3.7408837393938352 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.84888121803974,
            "unit": "iter/sec",
            "range": "stddev: 0.0038079931721369704",
            "extra": "mean: 5.622751142156564 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.12398471301297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006311407871623723",
            "extra": "mean: 11.477895590909977 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.26834935238405,
            "unit": "iter/sec",
            "range": "stddev: 0.0008168188097358314",
            "extra": "mean: 10.073704322917543 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1839034.3898877057,
            "unit": "iter/sec",
            "range": "stddev: 1.1014102392685857e-7",
            "extra": "mean: 543.7636215498187 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.05816015010214,
            "unit": "iter/sec",
            "range": "stddev: 0.00029054188221392",
            "extra": "mean: 3.7305337000001755 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.3649955966074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002367535198704274",
            "extra": "mean: 7.442414563107008 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.2432617245857,
            "unit": "iter/sec",
            "range": "stddev: 0.000046103663724985904",
            "extra": "mean: 2.822918903613394 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9354443594998995,
            "unit": "iter/sec",
            "range": "stddev: 0.004072277127948051",
            "extra": "mean: 1.069010668400003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.10980539866831,
            "unit": "iter/sec",
            "range": "stddev: 0.00011282649488031906",
            "extra": "mean: 8.466697550001001 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1594089.765458199,
            "unit": "iter/sec",
            "range": "stddev: 1.5669335356717845e-7",
            "extra": "mean: 627.3172450314075 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1884063.7210756904,
            "unit": "iter/sec",
            "range": "stddev: 1.0765667966127943e-7",
            "extra": "mean: 530.7676108900703 nsec\nrounds: 86949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.18845494808437,
            "unit": "iter/sec",
            "range": "stddev: 0.004280869516138264",
            "extra": "mean: 4.061928900000114 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.36345572735449,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939371133774676",
            "extra": "mean: 18.06245630555736 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.9528801208327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001285426171077016",
            "extra": "mean: 6.136743328859734 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4691.55429121182,
            "unit": "iter/sec",
            "range": "stddev: 0.00002529547738504451",
            "extra": "mean: 213.14897748773612 usec\nrounds: 844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2318.7588296897384,
            "unit": "iter/sec",
            "range": "stddev: 0.00008196424221830716",
            "extra": "mean: 431.26520412379625 usec\nrounds: 970"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.01169162478661,
            "unit": "iter/sec",
            "range": "stddev: 0.0007229871555950074",
            "extra": "mean: 10.099817340658987 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1785.229053371197,
            "unit": "iter/sec",
            "range": "stddev: 0.000009151782982454422",
            "extra": "mean: 560.1522102228935 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 706416.6603196854,
            "unit": "iter/sec",
            "range": "stddev: 2.6088100222932964e-7",
            "extra": "mean: 1.4155951525087969 usec\nrounds: 21413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141127.3508728913,
            "unit": "iter/sec",
            "range": "stddev: 4.092505547888081e-7",
            "extra": "mean: 7.085798704608767 usec\nrounds: 27174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.83862705564874,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597116124117",
            "extra": "mean: 10.544226873014802 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.6124404348692,
            "unit": "iter/sec",
            "range": "stddev: 0.00011398815149484589",
            "extra": "mean: 1.458549963541679 msec\nrounds: 576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7225193.4033815665,
            "unit": "iter/sec",
            "range": "stddev: 6.411803541450383e-9",
            "extra": "mean: 138.40459959614654 nsec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.11712513431841,
            "unit": "iter/sec",
            "range": "stddev: 0.0009629795421215945",
            "extra": "mean: 16.36202615555425 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.60391222270897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002164930839185623",
            "extra": "mean: 11.681709095238293 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.29914035941016,
            "unit": "iter/sec",
            "range": "stddev: 0.00011463644484040542",
            "extra": "mean: 13.64272479999992 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.3512243016795,
            "unit": "iter/sec",
            "range": "stddev: 0.00006104618520625773",
            "extra": "mean: 6.315075897960037 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2294.35681958302,
            "unit": "iter/sec",
            "range": "stddev: 0.00009001928700872387",
            "extra": "mean: 435.8519962826626 usec\nrounds: 1076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.37055483703838,
            "unit": "iter/sec",
            "range": "stddev: 0.0007606078464933936",
            "extra": "mean: 10.596525597701815 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2337.157270375258,
            "unit": "iter/sec",
            "range": "stddev: 0.00008990329704209819",
            "extra": "mean: 427.8702219467834 usec\nrounds: 1613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.678122918797929,
            "unit": "iter/sec",
            "range": "stddev: 0.00010673683786115097",
            "extra": "mean: 63.783145799999375 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2348.9016637317322,
            "unit": "iter/sec",
            "range": "stddev: 0.00008489576757284578",
            "extra": "mean: 425.7308917782817 usec\nrounds: 1192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.17805032189602,
            "unit": "iter/sec",
            "range": "stddev: 0.00012581165200523727",
            "extra": "mean: 6.7486378571430805 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.551117997537811,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657268216363512",
            "extra": "mean: 391.98500459999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.33136337455534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002254275147643854",
            "extra": "mean: 3.916479302752407 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.5574046619619,
            "unit": "iter/sec",
            "range": "stddev: 0.0007784556438061254",
            "extra": "mean: 10.575586370786628 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.94601723734169,
            "unit": "iter/sec",
            "range": "stddev: 0.000741435448431087",
            "extra": "mean: 10.106520989129873 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8011.476959127643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012432109558233744",
            "extra": "mean: 124.82092941185823 usec\nrounds: 3060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.93111454644924,
            "unit": "iter/sec",
            "range": "stddev: 0.0015100134260142373",
            "extra": "mean: 24.431291722222344 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2283.8786405029387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856955198832616",
            "extra": "mean: 437.8516363635624 usec\nrounds: 1100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68604.15349157921,
            "unit": "iter/sec",
            "range": "stddev: 5.473363767207501e-7",
            "extra": "mean: 14.576376926256287 usec\nrounds: 12005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11973623.429010315,
            "unit": "iter/sec",
            "range": "stddev: 4.319092664445532e-9",
            "extra": "mean: 83.51690746978136 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.589697618215276,
            "unit": "iter/sec",
            "range": "stddev: 0.03850304153271422",
            "extra": "mean: 30.684543677418862 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.25214453500128,
            "unit": "iter/sec",
            "range": "stddev: 0.0008286491218279677",
            "extra": "mean: 10.498451293477606 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11481.560968555861,
            "unit": "iter/sec",
            "range": "stddev: 0.000039150365605688264",
            "extra": "mean: 87.09617122085264 usec\nrounds: 5087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8580912294744922,
            "unit": "iter/sec",
            "range": "stddev: 0.002988588017127925",
            "extra": "mean: 1.1653772532000062 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.07160060044475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003885837153278382",
            "extra": "mean: 5.152737427351894 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6319968.117340889,
            "unit": "iter/sec",
            "range": "stddev: 1.0132203486178961e-8",
            "extra": "mean: 158.2286463212368 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.04903777503772,
            "unit": "iter/sec",
            "range": "stddev: 0.0008813561596549493",
            "extra": "mean: 10.096009234044466 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.45380355915002,
            "unit": "iter/sec",
            "range": "stddev: 0.0002481994460521759",
            "extra": "mean: 9.39374608108164 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5813509.9224991305,
            "unit": "iter/sec",
            "range": "stddev: 1.0932874506841896e-8",
            "extra": "mean: 172.01312345396354 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1855636.9555165523,
            "unit": "iter/sec",
            "range": "stddev: 1.1281335793517497e-7",
            "extra": "mean: 538.8985151579021 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.32024243588154,
            "unit": "iter/sec",
            "range": "stddev: 0.00047744607861611895",
            "extra": "mean: 3.699316007520948 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17322738685608155,
            "unit": "iter/sec",
            "range": "stddev: 0.2450152096999442",
            "extra": "mean: 5.7727592509999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.58486884032394,
            "unit": "iter/sec",
            "range": "stddev: 0.019741680765109796",
            "extra": "mean: 12.108755684209882 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.1368774911449,
            "unit": "iter/sec",
            "range": "stddev: 0.00024778099872583236",
            "extra": "mean: 3.6345545864973494 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1184.5662957707466,
            "unit": "iter/sec",
            "range": "stddev: 0.000016722501168769123",
            "extra": "mean: 844.1908262714353 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7111517629479976,
            "unit": "iter/sec",
            "range": "stddev: 0.0012297466999909045",
            "extra": "mean: 1.4061696139999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.04893879760634,
            "unit": "iter/sec",
            "range": "stddev: 0.0007900382631563605",
            "extra": "mean: 10.520896000000196 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2315.1747352110674,
            "unit": "iter/sec",
            "range": "stddev: 0.00007726351441053122",
            "extra": "mean: 431.93284065828107 usec\nrounds: 364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2340.93334037091,
            "unit": "iter/sec",
            "range": "stddev: 0.00008272688880276052",
            "extra": "mean: 427.18004086419415 usec\nrounds: 1713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 76.51087712721393,
            "unit": "iter/sec",
            "range": "stddev: 0.02238417413658022",
            "extra": "mean: 13.07003706593651 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.4959749415675,
            "unit": "iter/sec",
            "range": "stddev: 0.00001169852965490442",
            "extra": "mean: 1.3253881176469442 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.7738864204061615,
            "unit": "iter/sec",
            "range": "stddev: 0.00021272203014007136",
            "extra": "mean: 173.19356966666058 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13428.281211591275,
            "unit": "iter/sec",
            "range": "stddev: 0.000001731165099200297",
            "extra": "mean: 74.4696945381812 usec\nrounds: 5932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2405.7273581720187,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016944693287044",
            "extra": "mean: 415.6747008770959 usec\nrounds: 1140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7960590018457327,
            "unit": "iter/sec",
            "range": "stddev: 0.0017133815649772908",
            "extra": "mean: 556.7745820000027 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.4458513828771,
            "unit": "iter/sec",
            "range": "stddev: 0.000023895652855244177",
            "extra": "mean: 1.8401097321018358 msec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492005.41001229687,
            "unit": "iter/sec",
            "range": "stddev: 1.530333400613721e-7",
            "extra": "mean: 2.032497975936904 usec\nrounds: 1976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.7353394637783,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523445394058425",
            "extra": "mean: 9.829426089997355 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.00137156819585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008703059947632349",
            "extra": "mean: 10.100870161290265 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9266494256547921,
            "unit": "iter/sec",
            "range": "stddev: 0.0036798520729060843",
            "extra": "mean: 1.0791567687999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.40966691027779,
            "unit": "iter/sec",
            "range": "stddev: 0.00022010238403052877",
            "extra": "mean: 10.265921563216935 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.28717842459736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508322901557619",
            "extra": "mean: 3.593410252175713 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.7994381288893,
            "unit": "iter/sec",
            "range": "stddev: 0.0007818236636514399",
            "extra": "mean: 10.54858572727404 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.45297664832465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006684128159126482",
            "extra": "mean: 9.053626532709364 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.69419687036267,
            "unit": "iter/sec",
            "range": "stddev: 0.00014682731243189604",
            "extra": "mean: 9.372580977529982 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9716.11907414859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020645526127320064",
            "extra": "mean: 102.92175223136906 usec\nrounds: 4145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.66476868546519,
            "unit": "iter/sec",
            "range": "stddev: 0.03583655288594078",
            "extra": "mean: 28.847733243905825 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 304.0171335027908,
            "unit": "iter/sec",
            "range": "stddev: 0.00007433666297591889",
            "extra": "mean: 3.2892882992425836 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.1791668328925,
            "unit": "iter/sec",
            "range": "stddev: 0.00027056024617545923",
            "extra": "mean: 3.5819291652180016 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.810036763404476,
            "unit": "iter/sec",
            "range": "stddev: 0.0003627154437573106",
            "extra": "mean: 20.91611025000165 msec\nrounds: 44"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bd326493992845283ceba6d9e45126d9ea395b4a",
          "message": "feat(duckdb): add attach_sqlite method",
          "timestamp": "2023-04-13T19:19:17-04:00",
          "tree_id": "10ce031645d755ba5d8bfc3a84f823f28e2d7504",
          "url": "https://github.com/ibis-project/ibis/commit/bd326493992845283ceba6d9e45126d9ea395b4a"
        },
        "date": 1681428230143,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.86030629196336,
            "unit": "iter/sec",
            "range": "stddev: 0.001014958930342035",
            "extra": "mean: 16.705561029417193 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.227343357812025,
            "unit": "iter/sec",
            "range": "stddev: 0.0003320753717955747",
            "extra": "mean: 20.73512514634536 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2713603.6176134567,
            "unit": "iter/sec",
            "range": "stddev: 1.531600257725281e-8",
            "extra": "mean: 368.513659662437 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.23123411268521,
            "unit": "iter/sec",
            "range": "stddev: 0.009506231780911617",
            "extra": "mean: 10.961158310813154 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7126891624813294,
            "unit": "iter/sec",
            "range": "stddev: 0.0022972540833660427",
            "extra": "mean: 1.4031362516000059 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.14654130909678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006894732511387292",
            "extra": "mean: 10.08608053086214 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.993227210319077,
            "unit": "iter/sec",
            "range": "stddev: 0.0003845879313753295",
            "extra": "mean: 40.010839400008535 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.24961932215852,
            "unit": "iter/sec",
            "range": "stddev: 0.00031220794866210005",
            "extra": "mean: 8.456686843748784 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.316652552704,
            "unit": "iter/sec",
            "range": "stddev: 0.00023075190047069848",
            "extra": "mean: 3.5421219079994444 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 287.05033600936105,
            "unit": "iter/sec",
            "range": "stddev: 0.00025836956686246814",
            "extra": "mean: 3.4837095608464606 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.77723165085847,
            "unit": "iter/sec",
            "range": "stddev: 0.00011670853340306746",
            "extra": "mean: 9.729781430551377 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.293802918364143,
            "unit": "iter/sec",
            "range": "stddev: 0.000310153559622664",
            "extra": "mean: 88.54413409091482 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.581222455043054,
            "unit": "iter/sec",
            "range": "stddev: 0.0007427023008126926",
            "extra": "mean: 22.945661999994766 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.60522510210622,
            "unit": "iter/sec",
            "range": "stddev: 0.0006845035353902379",
            "extra": "mean: 11.286016133333305 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 76.02451223997082,
            "unit": "iter/sec",
            "range": "stddev: 0.00034192547803628485",
            "extra": "mean: 13.153652296295006 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2117.288975068696,
            "unit": "iter/sec",
            "range": "stddev: 0.00008761336629305061",
            "extra": "mean: 472.30208619376333 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 228.6728022246232,
            "unit": "iter/sec",
            "range": "stddev: 0.0035022631469752924",
            "extra": "mean: 4.373060505104184 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.90256925564453,
            "unit": "iter/sec",
            "range": "stddev: 0.028202467569359645",
            "extra": "mean: 27.098384209306577 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.82460643577673,
            "unit": "iter/sec",
            "range": "stddev: 0.00007741459976911759",
            "extra": "mean: 6.067055287583205 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.2964556949436,
            "unit": "iter/sec",
            "range": "stddev: 0.00032586674947719316",
            "extra": "mean: 5.282719089107127 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.3500350667125,
            "unit": "iter/sec",
            "range": "stddev: 0.00005103510859310596",
            "extra": "mean: 9.770392353536495 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17108359084663802,
            "unit": "iter/sec",
            "range": "stddev: 0.15505621770868092",
            "extra": "mean: 5.84509592679999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 81.42513860289104,
            "unit": "iter/sec",
            "range": "stddev: 0.017319525519346863",
            "extra": "mean: 12.281219499999654 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10101.511685069117,
            "unit": "iter/sec",
            "range": "stddev: 0.000001989334229093737",
            "extra": "mean: 98.99508421873966 usec\nrounds: 4702"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.17100034007393,
            "unit": "iter/sec",
            "range": "stddev: 0.0010654916531869642",
            "extra": "mean: 10.291136208336363 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2175.49268823153,
            "unit": "iter/sec",
            "range": "stddev: 0.00008443295422703942",
            "extra": "mean: 459.665989874186 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.30676005869005,
            "unit": "iter/sec",
            "range": "stddev: 0.0008894610189154104",
            "extra": "mean: 9.969417808080877 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147880.8195988862,
            "unit": "iter/sec",
            "range": "stddev: 3.186607647648948e-7",
            "extra": "mean: 6.762202175457321 usec\nrounds: 35212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2135.663612075171,
            "unit": "iter/sec",
            "range": "stddev: 0.00009587767353963505",
            "extra": "mean: 468.23853454539363 usec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.17189719701844,
            "unit": "iter/sec",
            "range": "stddev: 0.00008667784678951422",
            "extra": "mean: 3.410968136990212 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2716497.237290151,
            "unit": "iter/sec",
            "range": "stddev: 1.986893589343383e-8",
            "extra": "mean: 368.12111798691456 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.368429257449,
            "unit": "iter/sec",
            "range": "stddev: 0.00005764508781086472",
            "extra": "mean: 1.3543374288167558 msec\nrounds: 583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.27776499126196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009635701223422883",
            "extra": "mean: 3.480951615000265 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.487145037631926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007714332410854967",
            "extra": "mean: 24.10385190624531 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.4896684361355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648221919324293",
            "extra": "mean: 3.502753726528291 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.5373171183954,
            "unit": "iter/sec",
            "range": "stddev: 0.00003227097668887781",
            "extra": "mean: 1.469427134773899 msec\nrounds: 601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.81055787515027,
            "unit": "iter/sec",
            "range": "stddev: 0.00035871469250379725",
            "extra": "mean: 3.6790329552221674 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.809556438943222,
            "unit": "iter/sec",
            "range": "stddev: 0.00018580722981596936",
            "extra": "mean: 63.25288149999762 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1180.2405201005668,
            "unit": "iter/sec",
            "range": "stddev: 0.000009095992418483782",
            "extra": "mean: 847.2849245294436 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.57881411304406,
            "unit": "iter/sec",
            "range": "stddev: 0.0008219878665785794",
            "extra": "mean: 9.844572500001126 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.78774796721927,
            "unit": "iter/sec",
            "range": "stddev: 0.0007379790500280833",
            "extra": "mean: 9.921840899999523 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2110.3196654310746,
            "unit": "iter/sec",
            "range": "stddev: 0.00010262801532104526",
            "extra": "mean: 473.8618591206324 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.471568104985208,
            "unit": "iter/sec",
            "range": "stddev: 0.003998611869982081",
            "extra": "mean: 404.6014342000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8480262018088447,
            "unit": "iter/sec",
            "range": "stddev: 0.0024961180622027753",
            "extra": "mean: 1.179208847399991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.7263502089559,
            "unit": "iter/sec",
            "range": "stddev: 0.000005448067721802415",
            "extra": "mean: 560.6241113626282 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6119353.2255035825,
            "unit": "iter/sec",
            "range": "stddev: 1.0796874928240466e-8",
            "extra": "mean: 163.4159629535403 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.73408031862438,
            "unit": "iter/sec",
            "range": "stddev: 0.00005928356629429207",
            "extra": "mean: 8.94982083486407 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.29456278815259,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235257946958872",
            "extra": "mean: 13.459935188682008 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.48562821213717,
            "unit": "iter/sec",
            "range": "stddev: 0.0008434262629439789",
            "extra": "mean: 10.364237851064823 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.4855792541181,
            "unit": "iter/sec",
            "range": "stddev: 0.00011408541937716599",
            "extra": "mean: 1.8674639219844307 msec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4495.740578015864,
            "unit": "iter/sec",
            "range": "stddev: 0.000023851555901509703",
            "extra": "mean: 222.43276333380803 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8327.288509562786,
            "unit": "iter/sec",
            "range": "stddev: 0.000014851699383915286",
            "extra": "mean: 120.08710864906776 usec\nrounds: 4197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73554.92597407624,
            "unit": "iter/sec",
            "range": "stddev: 4.333827016908226e-7",
            "extra": "mean: 13.595282528765525 usec\nrounds: 13680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.39975757574257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597407946838917",
            "extra": "mean: 3.491623067228105 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.58210553789837,
            "unit": "iter/sec",
            "range": "stddev: 0.000788663771935352",
            "extra": "mean: 10.35388485714473 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.48072204269148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008766639252037315",
            "extra": "mean: 10.473318368422879 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.95226356418587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005105248667195368",
            "extra": "mean: 3.9848215983285233 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.55239104788853,
            "unit": "iter/sec",
            "range": "stddev: 0.0009664966993913651",
            "extra": "mean: 10.576147138294195 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.22396250431218,
            "unit": "iter/sec",
            "range": "stddev: 0.000888859927009264",
            "extra": "mean: 10.078210693878919 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.28494996565072,
            "unit": "iter/sec",
            "range": "stddev: 0.00012829109581054949",
            "extra": "mean: 6.200206530199951 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.00733192132614,
            "unit": "iter/sec",
            "range": "stddev: 0.00080045128087767",
            "extra": "mean: 10.415871163042599 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 224.2614668130436,
            "unit": "iter/sec",
            "range": "stddev: 0.012845017226143332",
            "extra": "mean: 4.459080796228154 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.97406246235942,
            "unit": "iter/sec",
            "range": "stddev: 0.0004583802200430003",
            "extra": "mean: 17.86541758823499 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5564771.061292855,
            "unit": "iter/sec",
            "range": "stddev: 9.448911476235666e-9",
            "extra": "mean: 179.7019120793748 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9216468567928194,
            "unit": "iter/sec",
            "range": "stddev: 0.0038053172319017867",
            "extra": "mean: 1.0850142791999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2154.5553120308446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008413860808288075",
            "extra": "mean: 464.1328975942689 usec\nrounds: 1289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7128174.203484864,
            "unit": "iter/sec",
            "range": "stddev: 3.4246031644605904e-9",
            "extra": "mean: 140.28837840567243 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.70897915786702,
            "unit": "iter/sec",
            "range": "stddev: 0.0008073465154131159",
            "extra": "mean: 10.34030147673886 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.50032445125453,
            "unit": "iter/sec",
            "range": "stddev: 0.00008850534592756878",
            "extra": "mean: 6.230517000005875 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.6556146845236,
            "unit": "iter/sec",
            "range": "stddev: 0.00005480190010757128",
            "extra": "mean: 7.538316432200483 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.809324521974016,
            "unit": "iter/sec",
            "range": "stddev: 0.0010106474427461164",
            "extra": "mean: 552.6924484000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.6242564221374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003086503949252239",
            "extra": "mean: 9.122068715788899 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1751061.249689644,
            "unit": "iter/sec",
            "range": "stddev: 1.0954076456712623e-7",
            "extra": "mean: 571.0822509362472 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2158.3281798486046,
            "unit": "iter/sec",
            "range": "stddev: 0.00010302162044523362",
            "extra": "mean: 463.3215696002935 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12074.767928836252,
            "unit": "iter/sec",
            "range": "stddev: 0.000015021407876891808",
            "extra": "mean: 82.8173266677746 usec\nrounds: 5351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.7374451849868375,
            "unit": "iter/sec",
            "range": "stddev: 0.000734163367219626",
            "extra": "mean: 174.2936041666591 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13722.781148289188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015543201415741543",
            "extra": "mean: 72.87152576390606 usec\nrounds: 6676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.7047141239868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002653032570545837",
            "extra": "mean: 3.588026858975669 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2731964.4908772595,
            "unit": "iter/sec",
            "range": "stddev: 1.5394924132958112e-8",
            "extra": "mean: 366.036968393405 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 443480.434725335,
            "unit": "iter/sec",
            "range": "stddev: 3.4474659762567693e-7",
            "extra": "mean: 2.254890907688723 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11443750.288530093,
            "unit": "iter/sec",
            "range": "stddev: 4.091994935708979e-9",
            "extra": "mean: 87.38394099728436 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1645.0293614276368,
            "unit": "iter/sec",
            "range": "stddev: 0.005241766676410821",
            "extra": "mean: 607.8918853655908 usec\nrounds: 1230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9152848523688334,
            "unit": "iter/sec",
            "range": "stddev: 0.009174364889910974",
            "extra": "mean: 1.0925560467999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 749534.4830466213,
            "unit": "iter/sec",
            "range": "stddev: 1.6582864771913585e-7",
            "extra": "mean: 1.3341614330208202 usec\nrounds: 25317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.44370658045455,
            "unit": "iter/sec",
            "range": "stddev: 0.004055445230711972",
            "extra": "mean: 5.9721563767433254 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.14081701511486,
            "unit": "iter/sec",
            "range": "stddev: 0.0008042075694173495",
            "extra": "mean: 10.086662891304814 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2195.3801088951623,
            "unit": "iter/sec",
            "range": "stddev: 0.00010051086809706895",
            "extra": "mean: 455.50198617006504 usec\nrounds: 1880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.57302070949513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002651133079222306",
            "extra": "mean: 11.040815379310477 msec\nrounds: 58"
          }
        ]
      }
    ]
  }
}