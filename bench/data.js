window.BENCHMARK_DATA = {
  "lastUpdate": 1681427446384,
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
      }
    ]
  }
}